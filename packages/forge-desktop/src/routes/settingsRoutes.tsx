import { Router } from 'lumbridge';
import Accounts from '../containers/settings/Accounts';
import Membership from '../containers/settings/Membership';
import Profile from '../containers/settings/Profile';
import Preferences from '../containers/settings/Preferences';

export default Router.create({
  base: '/settings',
  routes: {
    preferences: {
      path: '/preferences',
      component: Preferences,
    },
    profile: {
      path: '/profile',
      component: Profile,
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
