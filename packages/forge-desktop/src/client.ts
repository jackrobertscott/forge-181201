import ApolloClient, { Operation } from 'apollo-boost';
import config from './config';

const authenticateRequests = (operation: Operation) => {
  /**
   * TODO: Make sure we set the token here.
   */
  const token = '';
  operation.setContext({
    headers: {
      authorization: token || '',
    },
  });
};

export default new ApolloClient({
  uri: config.urls.api,
  request: authenticateRequests as () => any,
});
