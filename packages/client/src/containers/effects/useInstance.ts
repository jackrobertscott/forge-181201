import { useState, useEffect } from 'react';
import { Instance } from 'lumbridge';

export default (instance: Instance) => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(
    () => {
      const unwatch = instance.watch({
        catch: issue => setError(issue || null),
        status: status => setLoading(status.loading),
      });
      return () => unwatch();
    },
    [instance]
  );
  return { loading, error };
};
