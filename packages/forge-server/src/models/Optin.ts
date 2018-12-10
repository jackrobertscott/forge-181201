import { Schema, Document, model } from 'mongoose';
import { modelOptions } from '../utils/models';

export interface IOptin extends Document {
  createdAt: string;
  updatedAt: string;
  userId: string;
  bundleId: string;
}

const schema = {
  bundleId: {
    type: Schema.Types.ObjectId,
    ref: 'Bundle',
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
};

const optinSchema = new Schema(schema, modelOptions);

/**
 * This is a helper method which converts mongoose properties
 * from objects to strings, numbers, and booleans.
 */
optinSchema.method('toGraph', function toGraph(this: any) {
  return {
    ...this.toObject(),
    bundleId: String(this.bundleId),
    userId: String(this.userId),
  };
});

export default model<IOptin>('Optin', optinSchema);
