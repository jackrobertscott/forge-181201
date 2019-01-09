import localPersistor from './localPersistor';
import { Scope } from 'lumbridge';

export const saveLocalAuth = localPersistor.instance({
  name: 'store',
  map: ({ ...args }) => ({
    ...args,
    id: 'auth',
  }),
});

export const retrieveLocalAuth = localPersistor.instance({
  name: 'retrieve',
  map: ({ ...args }) => ({
    ...args,
    id: 'auth',
  }),
});

const authScope: Scope = Scope.create();

authScope.absorb(saveLocalAuth);
authScope.absorb(retrieveLocalAuth);

export default authScope;
