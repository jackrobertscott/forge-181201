import { Persistor } from 'lumbridge';
import * as Yup from 'yup';

const Store = (window as any).require('electron-store');
const store = new Store();

const localPersistor: Persistor = Persistor.create({
  methods: {
    store: {
      payload: {
        id: Yup.string().required(),
        data: Yup.object().required(),
      },
      handler: ({ id, data }) => {
        // @ts-ignore
        return new Promise((resolve, reject) => {
          try {
            const save = JSON.stringify(data);
            store.set(id, save);
            resolve(data || {});
          } catch (error) {
            reject(error);
          }
        });
      },
    },
    retrieve: {
      payload: {
        id: Yup.string().required(),
      },
      handler: ({ id }) => {
        // @ts-ignore
        return new Promise((resolve, reject) => {
          try {
            const encode = store.get(id);
            const data = encode && JSON.parse(encode);
            resolve(data || {});
          } catch (error) {
            store.delete(id);
            reject(error);
          }
        });
      },
    },
  },
});

export default localPersistor;
