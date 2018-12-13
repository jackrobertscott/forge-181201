import * as jwt from 'jsonwebtoken';
import config from '../config';

export const decode = (token: string): string | object => {
  return jwt.verify(token, config.token.secret);
};

export const encode = (data: any): string => {
  return jwt.sign(data, config.token.secret);
};
