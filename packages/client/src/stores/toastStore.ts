import { Store } from 'lumbridge';
import * as Yup from 'yup';

const toastStore: Store = Store.create({
  schema: {
    type: {
      state: null,
      validate: Yup.string(),
    },
    contents: {
      state: null,
      validate: Yup.string(),
    },
  },
  actions: {
    ping: ({ type = null, contents = null } = {}) => ({
      type,
      contents,
    }),
  },
});

export default toastStore;
