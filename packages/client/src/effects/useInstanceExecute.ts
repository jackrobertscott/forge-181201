import { useState, useEffect } from 'react';
import { Instance } from 'lumbridge';

export default (instance: Instance) => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<{ [name: string]: any }>({});
  useEffect(
    () => {
      const unwatch = instance.watch({
        data: results => setData(results),
        catch: issue => setError(issue || null),
        status: status => setLoading(status.loading),
      });
      instance.execute();
      return () => unwatch();
    },
    [instance]
  );
  return { data, loading, error };
};
