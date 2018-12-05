import React, { FunctionComponent, useState } from 'react';

interface IMarketProps {}

const Market: FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const upvote = () => setCount(count + 1);
  return (
    <div>
      Market: {count}
      <button onClick={upvote}>Up</button>
    </div>
  );
};

export default Market;
