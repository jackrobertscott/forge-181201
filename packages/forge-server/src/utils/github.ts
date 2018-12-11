import axios from 'axios';
import * as queryString from 'query-string';
import config from '../config';

export const resolveCode = async (code: string) => {
  const options = {
    client_id: config.auth.github.id,
    client_secret: config.auth.github.secret,
    code,
  };
  const url = `${
    config.auth.github.url
  }/login/oauth/access_token?${queryString.stringify(options)}`;
  const { data } = await axios.get(url);
  const { error, error_description, access_token } = queryString.parse(data);
  if (error) {
    throw new Error(
      error_description && error_description.length
        ? error_description[0]
        : 'The action could not be performed because of an unknown error.'
    );
  }
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
  return { ghUserResponse, ghUserData, access_token };
};
