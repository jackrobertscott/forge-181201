import React, { FunctionComponent, useState } from 'react';

interface IPreferencesProps {}

const Preferences: FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const upvote = () => setCount(count + 1);
  return (
    <div>
      Preferences: {count}
      <button onClick={upvote}>Up</button>
    </div>
  );
};

export default Preferences;
