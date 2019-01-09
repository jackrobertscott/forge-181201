import { Router } from 'lumbridge';
import FindCode from '../pages/FindCode';
import CreateCode from '../pages/CreateCode';
import EditCode from '../pages/EditCode';
import Settings from '../pages/Settings';
import authStore from '../../utils/authStore';

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
}).render();
