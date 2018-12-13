import { ApolloServer } from 'apollo-server';
import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';
import { connect, connection } from 'mongoose';
import config from './config';
import { decode } from './utils/auth';
import { capture } from './utils/errors';
import User from './models/User';
import { AuthDirective } from './directives/AuthDirective';
import bundleResolvers from './resolvers/bundleResolvers';
import codeResolvers from './resolvers/codeResolvers';
import providerResolvers from './resolvers/providerResolvers';
import userResolvers from './resolvers/userResolvers';
import optinResolvers from './resolvers/optinResolvers';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

/**
 * Connect to the mongodb database using
 * the mongoose library.
 */
connect(
  config.mongodb.uri,
  { useNewUrlParser: true }
);
connection.on('error', error => {
  throw error;
});

/**
 * Load all gql files into an array of strings.
 */
const typeDefs = readdirSync(join(__dirname, './schemas/')).map(file => {
  return readFileSync(join(__dirname, './schemas/', file)).toString('utf-8');
});

/**
 * Declare the schema which the will hold our
 * GraphQL types and resolvers.
 */
const schema = makeExecutableSchema({
  typeDefs,
  resolvers: merge(
    bundleResolvers,
    codeResolvers,
    providerResolvers,
    userResolvers,
    optinResolvers
  ) as any,
  schemaDirectives: {
    auth: AuthDirective,
  },
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
});

/**
 * Create the server which we will send our
 * GraphQL queries to.
 */
const server = new ApolloServer({
  schema,
  formatError(error?: any) {
    if (
      error &&
      error.extensions &&
      error.extensions.code === 'INTERNAL_SERVER_ERROR'
    ) {
      if (config.production) {
        capture(error);
      } else {
        console.log(error);
      }
    }
    return error;
  },
  async context({ req }: any) {
    const token = req && req.headers && req.headers.authorization;
    if (token) {
      const data = decode(token) as { userId: string };
      const user = data.userId ? await User.findById(data.userId) : null;
      return { user };
    }
  },
});

/**
 * Turn the server on by listening to a port
 * Defaults to: http://localhost:4000
 */
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
