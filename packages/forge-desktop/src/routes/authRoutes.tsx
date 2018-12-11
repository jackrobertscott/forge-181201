import { Router } from 'lumbridge';
import Dashboard from '../containers/Dashboard';
import Auth from '../containers/pages/Auth';

export default Router.create({
  nomatch: {
    redirect: '/auth',
  },
  routes: {
    app: {
      path: '/',
      exact: true,
      component: Dashboard,
    },
    auth: {
      path: '/auth',
      component: Auth,
    },
  },
});
