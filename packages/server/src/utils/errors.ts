import * as Sentry from '@sentry/node';
import config from '../config';

Sentry.init({
  // dsn: config.production ? config.sentry.dsn : '',
  dsn: config.sentry.dsn,
});

export const capture = (error: any) => Sentry.captureException(error);

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
