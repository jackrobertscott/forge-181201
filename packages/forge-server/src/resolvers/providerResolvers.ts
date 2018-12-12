import * as queryString from 'query-string';
import { encode } from '../utils/auth';
import { recordAction, recordUser } from '../utils/record';
import Provider from '../models/Provider';
import User from '../models/User';
import config from '../config';
import { resolveCode } from '../utils/github';
import { hashPassword, comparePassword } from '../utils/password';
import { UserInputError } from 'apollo-server';

export default {
  Query: {
    /**
     * Get the auth url from GitHub.
     */
    async oauthGitHubUrl() {
      const options = {
        client_id: config.auth.github.id,
        scope: 'user',
      };
      return `${
        config.auth.github.url
      }/login/oauth/authorize?${queryString.stringify(options)}`;
    },
    async userConnectedGitHub(_: any, {}, { user }: { user: any }) {
      const count = await Provider.countDocuments({
        creatorId: user.id,
        domain: 'github',
      });
      return !!count;
    },
  },
  Mutation: {
    /**
     * Create a new user which can login with username and password.
     */
    async authCreateCustom(
      _: any,
      {
        username,
        password,
        email,
      }: { username: string; password: string; email: string }
    ) {
      const count: number = await User.countDocuments({ username });
      if (count) {
        throw new UserInputError('User with that username already exists.');
      }
      const user: any = await User.create({
        username,
        email,
      });
      const hash = await hashPassword(password);
      await Provider.create({
        creatorId: user.id,
        domain: 'custom',
        payload: {
          username,
          password: hash,
          email,
        },
      });
      recordUser({
        userId: user.id,
        traits: user.toRecord(),
      });
      recordAction({
        userId: user.id,
        scope: 'Provider',
        action: 'Custom Created',
      });
      recordAction({
        userId: user.id,
        scope: 'User',
        action: 'Created',
      });
      return {
        token: encode({ userId: user.id }),
        userId: user.id,
      };
    },
    /**
     * Login a user with their username and password.
     */
    async authLoginCustom(
      _: any,
      {
        username,
        password,
      }: { username: string; password: string; email: string }
    ) {
      const provider = await Provider.findOne({
        domain: 'custom',
        'payload.username': username,
      });
      if (!provider) {
        throw new UserInputError(
          `Could not find a login with the username "${username}".`
        );
      }
      const match = await comparePassword(password, provider.payload
        .password as string);
      if (!match) {
        throw new UserInputError('Password is incorrect.');
      }
      const user = await User.findById(provider.creatorId);
      if (!user) {
        throw new Error('User was not found.');
      }
      recordUser({
        userId: user.id,
        traits: user.toRecord(),
      });
      recordAction({
        userId: user.id,
        scope: 'Provider',
        action: 'Custom Logged In',
      });
      return {
        token: encode({ userId: user.id }),
        userId: user.id,
      };
    },
    /**
     * Connect an existing user to a GitHub account.
     */
    async authConnectGitHub(
      _: any,
      { code }: { code: string },
      { user }: { user: any }
    ) {
      const { ghUserData, access_token } = await resolveCode(code);
      user.avatar = user.avatar || ghUserData.avatar_url;
      await user.save();
      await Provider.create({
        creatorId: user.id,
        domain: 'github',
        payload: {
          userId: ghUserData.id,
          accessToken: access_token,
        },
      });
      recordUser({
        userId: user.id,
        traits: user.toRecord(),
      });
      recordAction({
        userId: user.id,
        scope: 'Provider',
        action: 'GitHub Created',
      });
      return {
        token: encode({ userId: user.id }),
        userId: user.id,
      };
    },
    /**
     * Log a user in with their GitHub (if connected).
     */
    async authLoginGitHub(_: any, { code }: { code: string }) {
      const { ghUserData } = await resolveCode(code);
      const provider = await Provider.findOne({
        domain: 'github',
        'payload.userId': ghUserData.id,
      });
      if (!provider) {
        throw new UserInputError(
          'Could not find a user connected to that GitHub account.'
        );
      }
      const user = await User.findById(provider.creatorId);
      if (!user) {
        throw new Error('User was not found.');
      }
      recordUser({
        userId: user.id,
        traits: user.toRecord(),
      });
      recordAction({
        userId: user.id,
        scope: 'Provider',
        action: 'GitHub Logged In',
      });
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
