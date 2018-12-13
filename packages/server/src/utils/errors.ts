import * as Sentry from '@sentry/node';
import config from '../config';

Sentry.init({
  dsn: config.sentry.dsn,
});

export const capture = (error: any) => Sentry.captureException(error);
