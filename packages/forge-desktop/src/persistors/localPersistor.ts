import { Persistor } from 'lumbridge';
import * as Yup from 'yup';

export default Persistor.create({
  methods: {
    store: {
      payload: {
        id: Yup.string().required(),
        data: Yup.object().required(),
      },
      handler: ({ id, data }) => {
        return new Promise((resolve, reject) => {
          try {
            const save = JSON.stringify(data);
            localStorage.setItem(id, save);
            resolve({ id, data });
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
        return new Promise((resolve, reject) => {
          try {
            const encode = localStorage.getItem(id);
            const data = JSON.parse(encode || '');
            resolve({ id, data });
          } catch (error) {
            reject(error);
          }
        });
      },
    },
  },
});
