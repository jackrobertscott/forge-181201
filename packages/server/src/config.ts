import * as dotenvSafe from 'dotenv-safe';
import * as dotenv from 'dotenv';

dotenvSafe.config({ allowEmptyValues: true });
dotenv.config();

interface IAuth {
  id: string;
  secret: string;
  url: string;
  api: string;
}

interface IAppConfig {
  environment: string;
  production: boolean;
  maxFreeCodes: number;
  mongodb: {
    uri: string;
  };
  stripe: {
    key: string;
    plan: string;
  };
  token: {
    secret: string;
  };
  sentry: {
    dsn: string;
  };
  segment: {
    key: string;
  };
  intercom: {
    secret: string;
  };
  auth: {
    github: IAuth;
  };
}

const config: IAppConfig = {
  environment: process.env.NODE_ENV || 'development',
  production: process.env.NODE_ENV === 'production',
  maxFreeCodes: 10,
  mongodb: {
    uri: process.env.MONGODB_URI as string,
  },
  stripe: {
    key: process.env.STRIPE_SECRET_KEY as string,
    plan: process.env.STRIPE_PLAN_STANDARD as string,
  },
  token: {
    secret: process.env.SUPER_SECRET_TOKEN as string,
  },
  sentry: {
    dsn: process.env.SENTRY_DSN as string,
  },
  segment: {
    key: process.env.SEGMENT_KEY as string,
  },
  intercom: {
    secret: process.env.INTERCOM_SECRET as string,
  },
  auth: {
    github: {
      id: process.env.AUTH_GITHUB_ID as string,
      secret: process.env.AUTH_GITHUB_SECRET as string,
      url: 'https://github.com',
      api: 'https://api.github.com',
    },
  },
};

export default config;
