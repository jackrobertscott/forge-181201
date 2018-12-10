import { Schema, Document, model } from 'mongoose';
import { modelOptions } from '../utils/models';

export interface IBundle extends Document {
  createdAt: string;
  updatedAt: string;
  creatorId: Schema.Types.ObjectId;
  name: string;
  readme: string;
  published: boolean;
}

const schema = {
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  readme: {
    type: String,
    required: true,
  },
  published: {
    type: Boolean,
    required: true,
    default: false,
  },
};

const bundleSchema: Schema = new Schema(schema, modelOptions);

/**
 * This is a helper method which converts mongoose properties
 * from objects to strings, numbers, and booleans.
 */
bundleSchema.method('toGraph', function toGraph(this: any) {
  return {
    ...this.toObject(),
    creatorId: String(this.creatorId),
  };
});

export default model<IBundle>('Bundle', bundleSchema);
