import { Persistor } from 'lumbridge';
import { string, object } from 'yup';
import client from '../client';

const apolloPersistor: Persistor = Persistor.create({
  methods: {
    query: {
      payload: {
        query: string().required(),
        variables: object(),
      },
      handler: ({ query, variables }) => {
        return client.query({ query, variables }).then(({ data }) => data);
      },
    },
    mutate: {
      payload: {
        mutation: string().required(),
        variables: object(),
      },
      handler: ({ mutation, variables }) => {
        return client.mutate({ mutation, variables }).then(({ data }) => data);
      },
    },
  },
});

export default apolloPersistor;
