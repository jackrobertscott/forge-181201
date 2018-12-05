import React, { FunctionComponent, useState } from 'react';

interface IErrorCatchProps {}

const ErrorCatch: FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const upvote = () => setCount(count + 1);
  return (
    <div>
      ErrorCatch: {count}
      <button onClick={upvote}>Up</button>
    </div>
  );
};

export default ErrorCatch;
