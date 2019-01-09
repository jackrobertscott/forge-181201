import Analytics from 'analytics-node';
import * as Sentry from '@sentry/browser';
import { titleCase } from 'change-case';
import config from '../config';
import authStore from './authStore';

const analytics = new Analytics(config.segmentId);

/**
 * Make sure to catch errors so that the app keeps functioning.
 */
const captureAndEnsure = (cb: any) => (...args: any[]) => {
  if (config.segmentId) {
    try {
      cb(...args);
    } catch (error) {
      Sentry.captureException(error);
    }
  }
};

/**
 * Recording changes of screen.
 */
export const recordPage = captureAndEnsure((data = {}) => {
  const userId = authStore.state.userId;
  const options = userId
    ? { userId }
    : {
        anonymousId: Math.random()
          .toString(36)
          .substr(3),
      };
  analytics.page({ ...options, ...data });
});

/**
 * Identify a person with traits.
 */
export const recordUser = captureAndEnsure(
  ({ userId, traits }: { userId: string; traits: any }) => {
    const id = userId || authStore.state.userId;
    analytics.identify({
      userId: id,
      traits,
    });
  }
);

/**
 * Record events which are specific to the front-end e.g. keyboard shortcuts etc.
 */
export const recordAction = captureAndEnsure(
  ({
    userId,
    scope,
    action,
    properties = {},
  }: {
    userId: string;
    scope: string;
    action: string;
    properties: any;
  }) => {
    const id = userId || authStore.state.userId;
    analytics.track({
      userId: id,
      event: titleCase(`${scope} ${action}`),
      properties,
    });
  }
);
