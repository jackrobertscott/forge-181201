import { Router } from 'lumbridge';
import Accounts from '../settings/Accounts';
import Membership from '../settings/Membership';
import Profile from '../settings/Profile';
import Preferences from '../settings/Preferences';
import Security from '../settings/Security';

export default Router.create({
  base: '/settings',
  routes: {
    profile: {
      path: '/profile',
      component: Profile,
    },
    preferences: {
      path: '/preferences',
      component: Preferences,
    },
    security: {
      path: '/security',
      component: Security,
    },
    accounts: {
      path: '/accounts',
      component: Accounts,
    },
    membership: {
      path: '/membership',
      component: Membership,
    },
  },
}).render();
