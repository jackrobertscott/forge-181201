import * as Stripe from 'stripe';
import config from '../config';

const stripe = new Stripe(config.stripe.key);

export const paymentsCustomerCreate = ({
  email,
  source,
  ...options
}: {
  email: string;
  source: string;
  [name: string]: any;
}) => {
  return stripe.customers.create({
    email,
    source,
    ...options,
  });
};

export const paymentsCustomerSubscribe = (
  customerId: string,
  options: {
    [name: string]: any;
  }
) => {
  return stripe.subscriptions.create({
    customer: customerId,
    items: [{ plan: config.stripe.plan }],
    ...options,
  });
};

export const paymentsCustomerUnsubscribe = (subscriptionId: string) => {
  return stripe.subscriptions.del(subscriptionId);
};
