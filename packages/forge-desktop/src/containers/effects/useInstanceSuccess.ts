import { useEffect } from 'react';
import { Instance } from 'lumbridge';

export default (instance: Instance, cb?: (data: any) => any) => {
  useEffect(
    () => {
      const unwatch = instance.watch({
        data: data => {
          // show success toast...
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
