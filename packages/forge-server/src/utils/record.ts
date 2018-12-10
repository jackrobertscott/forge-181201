// @ts-ignore
import * as Analytics from 'analytics-node';
import * as Sentry from '@sentry/node';
import config from '../config';

const analytics = new Analytics(config.segment.key);

const captureErrors = (cb: (...args: any[]) => any) => (...args: any[]) => {
  try {
    cb(...args);
  } catch (error) {
    Sentry.captureException(error);
  }
};

export const recordUser = captureErrors(
  ({ userId, traits }: { userId: string; traits: object }) =>
    analytics.identify({
      userId: String(userId),
      traits,
    })
);

export const recordAction = captureErrors(
  ({
    userId,
    scope,
    action,
    properties,
  }: {
    userId: string;
    scope: string;
    action: string;
    properties?: object;
  }) =>
    analytics.track({
      userId: String(userId),
      event: `${scope} ${action}`,
      properties: properties || {},
    })
);
