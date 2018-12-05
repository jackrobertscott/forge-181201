import React, { FunctionComponent, useState } from 'react';

interface IChooseBundleProps {}

const ChooseBundle: FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const upvote = () => setCount(count + 1);
  return (
    <div>
      ChooseBundle: {count}
      <button onClick={upvote}>Up</button>
    </div>
  );
};

export default ChooseBundle;
