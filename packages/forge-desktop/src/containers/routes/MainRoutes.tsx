import { Router } from 'lumbridge';
import FindCode from '../pages/FindCode';
import CreateCode from '../pages/CreateCode';
import EditCode from '../pages/EditCode';

export default Router.create({
  routes: {
    findCode: {
      path: '/',
      component: FindCode,
    },
    createCode: {
      path: '/create',
      component: CreateCode,
    },
    editCode: {
      path: '/edit',
      component: EditCode,
    },
  },
}).render();
