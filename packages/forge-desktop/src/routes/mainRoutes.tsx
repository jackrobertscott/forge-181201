import { Router } from 'lumbridge';
import FindCode from '../containers/pages/FindCode';
import CreateCode from '../containers/pages/CreateCode';
import EditCode from '../containers/pages/EditCode';
import Settings from '../containers/pages/Settings';

export default Router.create({
  routes: {
    findCode: {
      path: '/',
      exact: true,
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
    settings: {
      path: '/settings',
      component: Settings,
    },
  },
});
