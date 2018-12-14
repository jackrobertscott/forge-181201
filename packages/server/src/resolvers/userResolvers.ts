import Optin from '../models/Optin';
import { createHmac } from 'crypto';
import config from '../config';
import User from '../models/User';
import {
  paymentsCustomerUnsubscribe,
  paymentsCustomerCreate,
  paymentsCustomerSubscribe,
} from '../utils/payments';
import { recordAction, recordUser } from '../utils/record';

export default {
  Query: {
    async users(_: any, { filter = {} }: { filter: object }) {
      const users: any[] = await User.find({}, null, filter);
      return users.map(user => user.toObject());
    },
    async user(_: any, { id }: { id: string }) {
      const user: any = await User.findById(id);
      return user.toObject();
    },
    async me(_: any, {}, { user: me }: { user: any }) {
      const user: any = await User.findById(me.id);
      return user.toObject();
    },
  },
  Mutation: {
    async editUser(_: any, { id, input }: { id: string; input: object }) {
      const user: any = await User.findById(id);
      Object.assign(user, input);
      await user.save();
      recordUser({
        userId: user.id,
        traits: {
          name: user.name,
          email: user.email,
        },
      });
      recordAction({
        userId: user.id,
        scope: 'User',
        action: 'Updated',
        properties: user.toRecord(),
      });
      return user.toObject();
    },
    async editMe(
      _: any,
      { input }: { input: object },
      { user: me }: { user: any }
    ) {
      const user: any = await User.findById(me.id);
      Object.assign(user, input);
      await user.save();
      recordUser({
        userId: user.id,
        traits: {
          name: user.name,
          email: user.email,
        },
      });
      recordAction({
        userId: user.id,
        scope: 'User',
        action: 'Updated',
        properties: user.toRecord(),
      });
      return user.toObject();
    },
    async deleteUser(_: any, { id }: { id: string }) {
      const user: any = await User.findById(id);
      await user.remove();
      recordAction({
        userId: user.id,
        scope: 'User',
        action: 'Removed',
        properties: user.toRecord(),
      });
      return user ? user.toObject() : null;
    },
    async subscribeUser(
      _: any,
      { token, coupon }: { token: any; coupon: string },
      { user }: { user: any }
    ) {
      if (user.isSubscribed) {
        throw new Error('User has already subscribed.');
      }
      user.customer = user.customer || {};
      user.subscription = user.subscription || {};
      if (!user.customer.id || !user.customer.id.length) {
        const customer = await paymentsCustomerCreate({
          source: token,
          email: user.email,
          description: `${user.name} <${user.email}>`,
        });
        user.customer.id = customer.id;
      }
      const subscription = await paymentsCustomerSubscribe(user.customer.id, {
        coupon,
      });
      user.subscription.id = subscription.id;
      await user.save();
      recordAction({
        userId: user.id,
        scope: 'User',
        action: 'Subscribed',
        properties: user.toRecord(),
      });
      return user ? user.toObject() : null;
    },
    async unsubscribeUser(_: any, {}, { user }: { user: any }) {
      if (!user.isSubscribed) {
        throw new Error('User is not currently subscribed.');
      }
      await paymentsCustomerUnsubscribe(user.subscription.id);
      user.subscription.prevId = user.subscription.id;
      user.subscription.id = null;
      await user.save();
      recordAction({
        userId: user.id,
        scope: 'User',
        action: 'Unsubscribed',
        properties: user.toRecord({
          prevSubscriptionId: user.subscription.prevId,
        }),
      });
      return user ? user.toObject() : null;
    },
  },
  User: {
    async optins({ id }: { id: string }) {
      const optins = await Optin.find({ userId: id });
      return optins.map((optin: any) => optin.toObject());
    },
    async hasOptin({ id }: { id: string }, { bundleId }: { bundleId: string }) {
      const count = await Optin.countDocuments({ userId: id, bundleId });
      return !!count;
    },
    hash({ id }: { id: string }) {
      return createHmac('sha256', config.intercom.secret)
        .update(String(id))
        .digest('hex');
    },
  },
};
