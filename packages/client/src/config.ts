export interface IGlobalConfigDefaults {
  environment: string;
  appName: string;
  website: string;
  intercom: string;
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
}

const environment = process.env.REACT_APP_NODE_ENV || 'development';

const defaults: IGlobalConfigDefaults = {
  environment,
  appName: 'Forge',
  website: 'https://useforge.co',
  intercom: 'dwow1727',
};

let config: IGlobalConfig;

switch (environment) {
  case 'production':
    config = {
      ...defaults,
      debug: false,
      assetPath: './assets',
      urls: {
        spa: 'https://useforge.co',
        api: 'https://api.useforge.co',
      },
      stripeKey: 'pk_live_8a0UIMwjDkpxEeG1RBzigzv0',
      segmentId: 'oBormUrYCXRyVLATpu1b4E0xUvqWC2Fq',
      sentryDSN: 'https://d0b3058a07a143e8b2e80c1eae7299e7@sentry.io/1304463',
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
      stripeKey: 'pk_test_9m45EwdtEK8QXDYQlcavY2xW',
      segmentId: 'NAKRmOnDAdm6IXOdbf1O8joPDulWejPr',
      sentryDSN: '',
    };
    break;
}

export default config;
