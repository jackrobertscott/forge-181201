import config from '../config';

const defaults = {
  app_id: config.intercom,
  hide_default_launcher: true,
  custom_launcher_selector: '#intercom-launcher',
};

export default {
  start(data: any = {}) {
    try {
      if ((window as any).Intercom && config.intercom) {
        (window as any).Intercom('boot', { ...defaults, ...data });
      }
    } catch (e) {
      // code ...
    }
  },

  update(data: any = {}) {
    try {
      if ((window as any).Intercom && config.intercom) {
        (window as any).Intercom('update', data);
      }
    } catch (e) {
      // code ...
    }
  },

  shutdown() {
    try {
      if ((window as any).Intercom && config.intercom) {
        (window as any).Intercom('shutdown');
      }
    } catch (e) {
      // code ...
    }
  },

  restart(data: any = {}) {
    try {
      if ((window as any).Intercom && config.intercom) {
        (window as any).Intercom('shutdown');
        (window as any).Intercom('boot', { ...defaults, ...data });
      }
    } catch (e) {
      // code ...
    }
  },
};
