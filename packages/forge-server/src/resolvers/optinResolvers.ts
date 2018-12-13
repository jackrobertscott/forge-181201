import Bundle from '../models/Bundle';
import User from '../models/User';
import Optin from '../models/Optin';

export default {
  Mutation: {
    async optinUser(
      _: any,
      { bundleId }: { bundleId: string },
      { user }: { user: any }
    ) {
      if (!user.isSubscribed) {
        throw new Error(
          `You can not add a bundle to your library while in demo mode.\n\nHave to pay the bills some how...\n\n¯\\_(ツ)_/¯`
        );
      }
      const optin: any = await Optin.create({ bundleId, userId: user.id });
      return optin.toObject();
    },
    async optoutUser(
      _: any,
      { bundleId }: { bundleId: string },
      { user }: { user: any }
    ) {
      const optin: any = await Optin.findOne({ bundleId, userId: user.id });
      await optin.remove();
      return optin.toObject ? optin.toObject() : null;
    },
  },
  Optin: {
    async user({ userId }: { userId: string }) {
      const user: any = await User.findById(userId);
      return user.toObject();
    },
    async bundle({ bundleId }: { bundleId: string }) {
      const bundle: any = await Bundle.findById(bundleId);
      return bundle.toObject();
    },
  },
};
