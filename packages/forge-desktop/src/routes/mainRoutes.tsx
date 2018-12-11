import { Router } from 'lumbridge';
import FindCode from '../containers/pages/FindCode';
import CreateCode from '../containers/pages/CreateCode';
import EditCode from '../containers/pages/EditCode';
import Settings from '../containers/pages/Settings';
import Market from '../containers/pages/Market';

export default Router.create({
  nomatch: {
    redirect: '/',
  },
  routes: {
    dashboard: {
      path: '/',
      exact: true,
      component: FindCode,
    },
    market: {
      path: '/market',
      component: Market,
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
