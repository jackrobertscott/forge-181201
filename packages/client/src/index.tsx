import './clean.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import { StripeProvider } from 'react-stripe-elements';
import * as serviceWorker from './serviceWorker';
import config from './config';
import ErrorCatch from './containers/pages/ErrorCatch';
import App from './containers/App';

/**
 * Register error reporter before app rendering starts.
 */
Sentry.init({
  dsn: config.sentryDSN,
  environment: config.environment,
});

const app = (
  <ErrorCatch>
    <StripeProvider apiKey={config.stripeKey}>
      <App />
    </StripeProvider>
  </ErrorCatch>
);

ReactDOM.render(app, document.getElementById('root'));

/**
 * If you want your app to work offline and load faster, you can change
 * unregister() to register() below. Note this comes with some pitfalls.
 * Learn more about service workers: http://bit.ly/CRA-PWA
 */
serviceWorker.unregister();
