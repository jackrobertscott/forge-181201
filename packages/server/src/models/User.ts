import { Schema, Document, model } from 'mongoose';
import { modelOptions } from '../utils/models';

export interface IUser extends Document {
  id: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  name: string;
  avatar?: string;
  customer: {
    id: string;
  };
  subscription: {
    id: string;
    prevId: string;
  };
  preferences: {
    shortcutOpen: string;
    searchOnOpen: boolean;
  };
  toRecord: (extra?: object) => object;
}

const schema = {
  username: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value: any) => /^[0-9a-z\-]+$/.test(value),
      message: ({ value }: any) =>
        `${value} must only be letters, numbers and dashes e.g. "one-two-three".`,
    },
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
    id: {
      type: String,
    },
  },
  subscription: {
    id: {
      type: String,
    },
    prevId: {
      type: String,
    },
  },
  preferences: {
    shortcutOpen: {
      type: String,
    },
    searchOnOpen: {
      type: Boolean,
    },
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
