import { useState, useEffect } from 'react';
import { Instance } from 'lumbridge';
import toastStore from '../../utils/toastStore';

export default (instance: Instance) => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(
    () => {
      const unwatch = instance.watch({
        catch: issue => {
          setError(issue || null);
          toastStore.dispatch.ping({
            type: 'error',
            contents:
              issue && issue.message
                ? issue.message
                : 'There was an error talking to the server.',
          });
        },
        status: status => setLoading(status.loading),
      });
      return () => unwatch();
    },
    [instance]
  );
  return { loading, error };
};
