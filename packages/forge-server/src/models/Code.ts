import { Schema, Document, model } from 'mongoose';
import { modelOptions } from '../utils/models';

export interface ICode extends Document {
  createdAt: string;
  updatedAt: string;
  creatorId: string;
  bundleId: string;
  name: string;
  shortcut: string;
  contents: string;
  language?: string;
  toRecord: (extra?: object) => object;
}

const schema = {
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  bundleId: {
    type: Schema.Types.ObjectId,
    ref: 'Bundle',
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

codeSchema.method('toRecord', function toRecord(this: any, extra: object) {
  const {
    id,
    createdAt,
    updatedAt,
    creatorId,
    name,
    shortcut,
  } = this.toObject();
  return {
    id,
    createdAt,
    updatedAt,
    creatorId,
    name,
    shortcut,
    ...(extra || {}),
  };
});

export default model<ICode>('Code', codeSchema);
