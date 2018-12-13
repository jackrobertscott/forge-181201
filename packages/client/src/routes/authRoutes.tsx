import { Router } from 'lumbridge';
import Dashboard from '../containers/Dashboard';
import Auth from '../containers/pages/Auth';
import Login from '../containers/pages/Login';
import SignUp from '../containers/pages/SignUp';

export default Router.create({
  routes: {
    auth: {
      path: '/auth',
      component: Auth,
    },
    login: {
      path: '/login',
      component: Login,
    },
    signUp: {
      path: '/sign-up',
      component: SignUp,
    },
    app: {
      path: '/',
      component: Dashboard,
    },
  },
});
