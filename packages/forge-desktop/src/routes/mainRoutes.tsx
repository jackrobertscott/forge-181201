import { Router } from 'lumbridge';
import FindCode from '../containers/pages/FindCode';
import CreateCode from '../containers/pages/CreateCode';
import EditCode from '../containers/pages/EditCode';
import Settings from '../containers/pages/Settings';
import Market from '../containers/pages/Market';
import authStore from '../stores/authStore';

export default Router.create({
  nomatch: {
    redirect: '/auth',
  },
  change: {
    before: () => authStore.state.loggedIn,
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
