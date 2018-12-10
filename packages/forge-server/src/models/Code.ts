import { Schema, Document, model } from 'mongoose';
import { modelOptions } from '../utils/models';

export interface ICode extends Document {
  createdAt: string;
  updatedAt: string;
  creatorId: string;
  name: string;
  shortcut: string;
  contents: string;
  language?: string;
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
  shortcut: {
    type: String,
    required: true,
  },
  contents: {
    type: String,
    required: true,
  },
  language: {
    type: String,
  },
};

const codeSchema = new Schema(schema, modelOptions);

/**
 * This is a helper method which converts mongoose properties
 * from objects to strings, numbers, and booleans.
 */
codeSchema.method('toGraph', function toGraph(this: any) {
  return {
    ...this.toObject(),
    creatorId: String(this.creatorId),
  };
});

export default model<ICode>('Code', codeSchema);
