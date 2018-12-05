import React, { FunctionComponent, useState } from 'react';

interface IMembershipProps {}

const Membership: FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const upvote = () => setCount(count + 1);
  return (
    <div>
      Membership: {count}
      <button onClick={upvote}>Up</button>
    </div>
  );
};

export default Membership;
