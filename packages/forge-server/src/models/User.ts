import { Schema, Document, model } from 'mongoose';
import { modelOptions } from '../utils/models';

export interface IUser extends Document {
  createdAt: string;
  updatedAt: string;
  email: string;
  name: string;
  avatar?: string;
  customer: {
    id: string;
  };
  toRecord: (extra?: object) => object;
}

const schema = {
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  customer: {
    id: { type: String },
  },
  subscription: {
    id: { type: String },
    prevId: { type: String },
  },
  preferences: {
    shortcutOpen: { type: String },
    searchOnOpen: { type: Boolean },
  },
};

const userSchema = new Schema(schema, modelOptions);

/**
 * Is this customer paying?
 */
userSchema.virtual('isSubscribed').get(function(this: any) {
  return Boolean(
    this.customer &&
      this.customer.id &&
      this.customer.id.length &&
      this.subscription &&
      this.subscription.id &&
      this.subscription.id.length
  );
});

userSchema.method('toRecord', function toRecord(this: any, extra: object) {
  const {
    id,
    createdAt,
    updatedAt,
    email,
    name,
    customer,
    subscription,
  } = this.toObject();
  return {
    id,
    createdAt,
    updatedAt,
    email,
    name,
    customerId: customer && customer.id,
    subscriptionId: subscription && subscription.id,
    ...(extra || {}),
  };
});

export default model<IUser>('User', userSchema);