import { Store } from 'lumbridge';
import * as Yup from 'yup';

const authStore: Store = Store.create({
  schema: {
    token: {
      state: null,
      validate: Yup.string(),
    },
    userId: {
      state: null,
      validate: Yup.string(),
    },
    loggedIn: {
      state: false,
      validate: Yup.boolean().required(),
    },
  },
  actions: {
    patch: ({ token = null, userId = null } = {}) => ({
      token,
      userId,
      loggedIn: Boolean(token && userId),
    }),
  },
});

export default authStore;
