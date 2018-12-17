export interface IGlobalConfigDefaults {
  environment: string;
  appName: string;
  website: string;
}

export interface IGlobalConfig extends IGlobalConfigDefaults {
  debug: boolean;
  assetPath: string;
  urls: {
    spa: string;
    api: string;
  };
  stripeKey: string;
  segmentId: string;
  sentryDSN: string;
  intercom: string;
}

const environment = process.env.REACT_APP_NODE_ENV || 'development';

const defaults: IGlobalConfigDefaults = {
  environment,
  appName: 'Forge',
  website: 'https://useforge.co',
};

let config: IGlobalConfig;

switch (environment) {
  case 'production':
    config = {
      ...defaults,
      debug: false,
      assetPath: './assets',
      urls: {
        spa: 'https://app.useforge.co',
        api: 'https://api.v1.useforge.co',
      },
      stripeKey: process.env.REACT_APP_STRIPE_KEY as string,
      segmentId: process.env.REACT_APP_SEGMENT_ID as string,
      sentryDSN: process.env.REACT_APP_SENTRY_DSN as string,
      intercom: process.env.REACT_APP_INTERCOM_ID as string,
    };
    break;
  default:
    config = {
      ...defaults,
      debug: true,
      assetPath: '/assets',
      urls: {
        spa: 'http://localhost:3000',
        api: 'http://localhost:4000',
      },
      stripeKey: process.env.REACT_APP_STRIPE_KEY as string,
      segmentId: process.env.REACT_APP_SEGMENT_ID as string,
      sentryDSN: process.env.REACT_APP_SENTRY_DSN as string,
      intercom: process.env.REACT_APP_INTERCOM_ID as string,
    };
    break;
}

export default config;
