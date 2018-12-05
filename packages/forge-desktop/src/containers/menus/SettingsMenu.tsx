import React, { FunctionComponent, useState } from 'react';

interface ISettingsMenuProps {}

const SettingsMenu: FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const upvote = () => setCount(count + 1);
  return (
    <div>
      SettingsMenu: {count}
      <button onClick={upvote}>Up</button>
    </div>
  );
};

export default SettingsMenu;
