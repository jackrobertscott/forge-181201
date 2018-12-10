import { Schema, Document, model } from 'mongoose';
import { modelOptions } from '../utils/models';

export interface IOptin extends Document {
  createdAt: string;
  updatedAt: string;
  userId: string;
  bundleId: string;
  toRecord: (extra?: object) => object;
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

optinSchema.method('toRecord', function toRecord(this: any, extra: object) {
  const { id, createdAt, updatedAt, userId, bundleId } = this.toObject();
  return {
    id,
    createdAt,
    updatedAt,
    userId,
    bundleId,
    ...(extra || {}),
  };
});

export default model<IOptin>('Optin', optinSchema);
