import React, { FunctionComponent, useState } from 'react';

interface ISignInProps {}

const SignIn: FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const upvote = () => setCount(count + 1);
  return (
    <div>
      SignIn: {count}
      <button onClick={upvote}>Up</button>
    </div>
  );
};

export default SignIn;
