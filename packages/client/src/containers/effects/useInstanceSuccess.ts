import { useEffect } from 'react';
import { Instance } from 'lumbridge';
import toastStore from '../../stores/toastStore';

export default (instance: Instance, cb?: (data: any) => any) => {
  useEffect(
    () => {
      const unwatch = instance.watch({
        data: data => {
          toastStore.dispatch.ping({ type: '', contents: 'Success saved.' });
          if (cb) {
            cb(data);
          }
        },
      });
      return () => unwatch();
    },
    [instance]
  );
};
