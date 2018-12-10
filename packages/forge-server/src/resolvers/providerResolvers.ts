import axios from 'axios';
import * as queryString from 'query-string';
import { encode } from '../utils/auth';
import { recordAction, recordUser } from '../utils/record';
import Provider from '../models/Provider';
import User from '../models/User';
import config from '../config';

export default {
  Query: {
    async oauthGitHubUrl() {
      const options = {
        client_id: config.auth.github.id,
        scope: 'user',
      };
      return `${
        config.auth.github.url
      }/login/oauth/authorize?${queryString.stringify(options)}`;
    },
  },
  Mutation: {
    async findOrCreateGitHub(_: any, { code }: { code: string }) {
      /**
       * Get the user token from GitHub.
       */
      const options = {
        client_id: config.auth.github.id,
        client_secret: config.auth.github.secret,
        code,
      };
      const url = `${
        config.auth.github.url
      }/login/oauth/access_token?${queryString.stringify(options)}`;
      const { data } = await axios.get(url);
      const { error, error_description, access_token } = queryString.parse(
        data
      );
      if (error) {
        throw new Error(
          error_description && error_description.length
            ? error_description[0]
            : 'The action could not be performed because of an unknown error.'
        );
      }
      /**
       * Get the user data from GitHub.
       */
      const ghUserResponse: {
        data: {
          id: string;
          email: string;
          name: string;
          login: string;
          avatar_url: string;
        };
      } = await axios.get(`${config.auth.github.api}/user`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      });
      const ghUserData = ghUserResponse.data;
      if (!ghUserData.email) {
        const emailResponse = await axios.get(
          `${config.auth.github.api}/user/emails`,
          {
            headers: {
              Authorization: `token ${access_token}`,
            },
          }
        );
        const ghEmailData = emailResponse.data[0];
        if (ghEmailData && ghEmailData.email) {
          ghUserData.email = ghEmailData.email;
        }
      }
      /**
       * Find or create a user in the database.
       */
      let user;
      let provider;
      let newUser = false;
      provider = await Provider.findOne({
        domain: 'github',
        'payload.userId': ghUserData.id,
      });
      if (provider) {
        user = await User.findById(provider.creatorId);
      } else {
        user = await User.findOne({ email: ghUserData.email });
        if (!user) {
          newUser = true;
          const { email, name, login } = ghUserData;
          user = await User.create({
            email,
            name: name || login || 'Your Name',
          });
        }
        user.avatar = user.avatar || ghUserData.avatar_url;
        await user.save();
        provider = await Provider.create({
          creatorId: user.id,
          domain: 'github',
          payload: {
            userId: ghUserData.id,
            accessToken: access_token,
          },
        });
      }
      if (!user) {
        throw new Error('User was not defined.');
      }
      /**
       * Record analytics.
       */
      recordUser({
        userId: user.id,
        traits: user.toRecord(),
      });
      recordAction({
        userId: user.id,
        scope: 'Provider',
        action: 'GitHub Logged In',
      });
      if (newUser) {
        recordAction({
          userId: user.id,
          scope: 'User',
          action: 'Created',
        });
      }
      /**
       * Return the user's information to the client.
       */
      return {
        token: encode({ userId: user.id }),
        userId: user.id,
      };
    },
  },
  Provider: {
    async creator({ creatorId }: { creatorId?: string }) {
      if (creatorId) {
        const user: any = await User.findById(creatorId);
        return user.toObject();
      }
      return null;
    },
  },
};
