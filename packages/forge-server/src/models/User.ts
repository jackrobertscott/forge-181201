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
}

const schema = {
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
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
 * This is a helper method which converts mongoose properties
 * from objects to strings, numbers, and booleans.
 */
userSchema.method('toGraph', function toGraph(this: any) {
  return {
    ...this.toObject(),
  };
});

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

export default model<IUser>('User', userSchema);
