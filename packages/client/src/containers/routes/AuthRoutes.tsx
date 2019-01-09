import { Router } from 'lumbridge';
import Dashboard from '../Dashboard';
import Auth from '../pages/Auth';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

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
}).render();
