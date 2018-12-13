import { Schema, Document, model } from 'mongoose';
import { modelOptions } from '../utils/models';

export interface IBundle extends Document {
  id: string;
  createdAt: string;
  updatedAt: string;
  creatorId: Schema.Types.ObjectId | string;
  name: string;
  readme: string;
  published: boolean;
  toRecord: (extra?: object) => object;
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

bundleSchema.method('toRecord', function toRecord(this: any, extra: object) {
  const { id, createdAt, updatedAt, creatorId, name, readme } = this.toObject();
  return {
    id,
    createdAt,
    updatedAt,
    creatorId,
    name,
    readme,
    ...(extra || {}),
  };
});

export default model<IBundle>('Bundle', bundleSchema);
