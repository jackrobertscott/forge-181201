import { Router } from 'lumbridge';
import Accounts from '../settings/Accounts';
import Membership from '../settings/Membership';
import Profile from '../settings/Profile';
import Preferences from '../settings/Preferences';

export default Router.create({
  base: '/settings',
  routes: {
    accounts: {
      path: '/accounts',
      component: Accounts,
    },
    membership: {
      path: '/membership',
      component: Membership,
    },
    preferences: {
      path: '/preferences',
      component: Preferences,
    },
    profile: {
      path: '/profile',
      component: Profile,
    },
  },
}).render();
