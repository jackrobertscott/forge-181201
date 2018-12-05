import { Router } from 'lumbridge';
import FindCode from '../pages/FindCode';

export default Router.create({
  routes: {
    findCode: {
      path: '/',
      component: FindCode,
    },
  },
}).render();
