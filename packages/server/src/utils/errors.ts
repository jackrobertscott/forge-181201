import * as Sentry from '@sentry/node';
import config from '../config';
import { GraphQLError } from 'graphql';

Sentry.init({
  // dsn: config.production ? config.sentry.dsn : '',
  dsn: config.sentry.dsn,
});

export const capture = (error: any) => {
  const { code, exception } = error.extensions;
  if (
    code === 'INTERNAL_SERVER_ERROR' &&
    exception.name !== 'ValidationError'
  ) {
    if (config.production) {
      Sentry.captureException(exception);
    } else {
      console.log(exception);
    }
  }
  return error;
};

export const captureRequestData = ({
  req,
  options,
}: {
  req: any;
  options?: any;
}) => {
  Sentry.configureScope(scope => {
    scope.addEventProcessor(async event =>
      Sentry.Handlers.parseRequest(event, req, options)
    );
  });
};
