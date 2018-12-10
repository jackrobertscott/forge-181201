import { Schema, Document, model } from 'mongoose';
import { modelOptions } from '../utils/models';

export interface IProvider extends Document {
  createdAt: string;
  updatedAt: string;
  creatorId: string;
  domain: string;
  payload: object;
}

const schema = {
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  domain: {
    type: String,
    enum: ['github', 'custom'],
    required: true,
  },
  payload: {
    type: Schema.Types.Mixed,
    required: true,
  },
};

const providerSchema = new Schema(schema, modelOptions);

/**
 * This is a helper method which converts mongoose properties
 * from objects to strings, numbers, and booleans.
 */
providerSchema.method('toGraph', function toGraph(this: any) {
  return {
    ...this.toObject(),
    creatorId: String(this.creatorId),
  };
});

export default model<IProvider>('Provider', providerSchema);
