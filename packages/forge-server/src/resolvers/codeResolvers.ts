import User from '../models/User';
import Code from '../models/Code';
import Optin from '../models/Optin';
import { recordAction } from '../utils/record';

export default {
  Query: {
    async userCodes(
      _: any,
      { filter, search }: { filter?: object; search?: string },
      { user }: { user: any }
    ) {
      const items: any[] = await Optin.find({ userId: user.id })
        .select('bundleId')
        .populate({
          path: 'bundleId',
          select: 'codeIds',
        });
      const codeIds = items.reduce((ids, optin) => {
        return ids.concat(optin.bundleId.codeIds);
      }, []);
      let options: any = {
        $or: [{ creatorId: user.id }, { _id: { $in: codeIds } }],
      };
      if (search && search.length) {
        const regSearch = new RegExp(search, 'i');
        const searchOr: any = {
          $or: [
            { name: { $regex: regSearch } },
            { shortcut: { $regex: regSearch } },
          ],
        };
        options = { $and: [options, searchOr] };
      }
      const codes: any[] = await Code.find(options, null, filter);
      return codes.map(code => code.toObject());
    },
    async codes(_: any, { filter = {} }) {
      const codes: any[] = await Code.find({}, null, filter);
      return codes.map(code => code.toObject());
    },
    async code(_: any, { id }: { id: string }) {
      const code: any = await Code.findById(id);
      return code.toObject();
    },
  },
  Mutation: {
    async addCode(
      _: any,
      { input }: { input: object },
      { user }: { user: any }
    ) {
      const code: any = await Code.create({
        ...input,
        creatorId: user && user.id,
      });
      recordAction({
        userId: code.creatorId,
        scope: 'Code',
        action: 'Created',
        properties: code.toRecord(),
      });
      return code.toObject();
    },
    async editCode(_: any, { id, input }: { id: string; input: object }) {
      const code: any = await Code.findById(id);
      Object.assign(code, input);
      await code.save();
      recordAction({
        userId: code.creatorId,
        scope: 'Code',
        action: 'Updated',
        properties: code.toRecord(),
      });
      return code.toObject();
    },
    async cloneCode(_: any, { id }: { id: string }, { user }: { user: any }) {
      const code: any = await Code.findById(id);
      const { _id, ...data }: any = code.toObject();
      const clone: any = await Code.create({
        ...data,
        creatorId: user && user.id,
      });
      recordAction({
        userId: code.creatorId,
        scope: 'Code',
        action: 'Cloned',
        properties: code.toRecord(),
      });
      return clone.toObject();
    },
    async deleteCode(_: any, { id }: { id: string }) {
      const code: any = await Code.findById(id);
      await code.remove();
      recordAction({
        userId: code.creatorId,
        scope: 'Code',
        action: 'Removed',
        properties: code.toRecord(),
      });
      return code ? code.toObject() : null;
    },
  },
  Code: {
    async creator({ creatorId }: { creatorId?: string }) {
      if (creatorId) {
        const user: any = await User.findById(creatorId);
        return user.toObject();
      }
      return null;
    },
  },
};
