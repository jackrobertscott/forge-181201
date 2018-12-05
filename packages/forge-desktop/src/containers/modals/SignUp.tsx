import React, { FunctionComponent, useState } from 'react';

interface ISignUpProps {}

const SignUp: FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const upvote = () => setCount(count + 1);
  return (
    <div>
      SignUp: {count}
      <button onClick={upvote}>Up</button>
    </div>
  );
};

export default SignUp;
