import Bundle from '../models/Bundle';
import User from '../models/User';
import Code from '../models/Code';
import { recordAction } from '../utils/record';

export default {
  Query: {
    async userBundles(
      _: any,
      { filter, search }: { filter?: object; search?: string },
      { user }: { user: any }
    ) {
      const options: any = { creatorId: user.id };
      if (search && search.length) {
        const regSearch = new RegExp(search, 'i');
        options.$or = [{ name: { $regex: regSearch } }];
      }
      const bundles: any[] = await Bundle.find(options, null, filter);
      return bundles.map(bundle => bundle.toObject());
    },
    async marketBundles(
      _: any,
      { filter, search }: { filter?: object; search?: string }
    ) {
      const options: any = {
        published: true,
      };
      if (search && search.length) {
        const regSearch = new RegExp(search, 'i');
        options.$or = [{ name: { $regex: regSearch } }];
      }
      const bundles: any[] = await Bundle.find(options, null, filter);
      return bundles.map(bundle => bundle.toObject());
    },
    async bundle(_: any, { id }: { id: string }) {
      const bundle: any = await Bundle.findById(id);
      return bundle.toObject();
    },
  },
  Mutation: {
    async addBundle(
      _: any,
      { input }: { input: object },
      { user }: { user: any }
    ) {
      const bundle: any = await Bundle.create({
        ...input,
        creatorId: user && user.id,
      });
      recordAction({
        userId: bundle.creatorId,
        scope: 'Bundle',
        action: 'Created',
        properties: bundle.toRecord(),
      });
      return bundle.toObject();
    },
    async editBundle(_: any, { id, input }: { id: string; input: object }) {
      const bundle: any = await Bundle.findById(id);
      Object.assign(bundle, input);
      await bundle.save();
      recordAction({
        userId: bundle.creatorId,
        scope: 'Bundle',
        action: 'Updated',
        properties: bundle.toRecord(),
      });
      return bundle.toObject();
    },
    async deleteBundle(_: any, { id }: { id: string }) {
      const bundle: any = await Bundle.findById(id);
      await bundle.remove();
      recordAction({
        userId: bundle.creatorId,
        scope: 'Bundle',
        action: 'Removed',
        properties: bundle.toRecord(),
      });
      return bundle ? bundle.toObject() : null;
    },
  },
  Bundle: {
    async creator({ creatorId }: { creatorId?: string }) {
      if ({ creatorId }) {
        const user: any = await User.findById(creatorId);
        return user.toObject();
      }
      return null;
    },
    async codes({ codeIds }: { codeIds?: string[] }) {
      if (codeIds && codeIds.length) {
        const codes = await Code.find({ _id: { $in: codeIds } });
        return codes.map((code: any) => code.toObject());
      }
      return [];
    },
  },
};
