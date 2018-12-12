import { Persistor } from 'lumbridge';
import * as Yup from 'yup';

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
            localStorage.setItem(id, save);
            resolve(data);
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
            const encode = localStorage.getItem(id);
            const data = JSON.parse(encode || '');
            resolve(data);
          } catch (error) {
            reject(error);
          }
        });
      },
    },
  },
});

export default localPersistor;
