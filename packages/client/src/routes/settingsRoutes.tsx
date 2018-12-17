import { Router } from 'lumbridge';
import Accounts from '../containers/settings/Accounts';
import Membership from '../containers/settings/Membership';
import Profile from '../containers/settings/Profile';
import Preferences from '../containers/settings/Preferences';
import Security from '../containers/settings/Security';

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
});
