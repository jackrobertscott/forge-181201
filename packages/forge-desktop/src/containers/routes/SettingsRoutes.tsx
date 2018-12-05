import React, { FunctionComponent, useState } from 'react';

interface ISettingsRoutesProps {}

const SettingsRoutes: FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const upvote = () => setCount(count + 1);
  return (
    <div>
      SettingsRoutes: {count}
      <button onClick={upvote}>Up</button>
    </div>
  );
};

export default SettingsRoutes;
