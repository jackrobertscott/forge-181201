import { useEffect, useState } from 'react';

export default (keycode: string) => {
  const [activeKey, setActiveKey] = useState<KeyboardEvent | null>(null);
  useEffect(() => {
    const keyEvent = (event: KeyboardEvent) => setActiveKey(event);
    window.addEventListener(keycode, keyEvent as any);
    return () => window.removeEventListener(keycode, keyEvent as any);
  }, []);
  return { activeKey };
};
