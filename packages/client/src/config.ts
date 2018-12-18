export interface IGlobalConfigDefaults {
  environment: string;
  appName: string;
  assetPath: string;
  website: string;
  stripeKey: string;
  segmentId: string;
  sentryDSN: string;
  intercom: string;
}

const environment = process.env.REACT_APP_NODE_ENV || 'development';

const defaults: IGlobalConfigDefaults = {
  environment,
  appName: 'Forge',
  assetPath: './assets',
  website: 'https://useforge.co',
  stripeKey: process.env.REACT_APP_STRIPE_KEY as string,
  segmentId: process.env.REACT_APP_SEGMENT_ID as string,
  sentryDSN: process.env.REACT_APP_SENTRY_DSN as string,
  intercom: process.env.REACT_APP_INTERCOM_ID as string,
};

export interface IGlobalConfig extends IGlobalConfigDefaults {
  debug: boolean;
  urls: {
    spa: string;
    api: string;
  };
}

let config: IGlobalConfig;

switch (environment) {
  case 'production':
    config = {
      ...defaults,
      debug: false,
      urls: {
        spa: 'https://app.useforge.co',
        api: 'https://api.v1.useforge.co',
      },
    };
    break;
  default:
    config = {
      ...defaults,
      debug: true,
      urls: {
        spa: 'http://localhost:3000',
        api: 'http://localhost:4000',
      },
    };
    break;
}

export default config;
