import React, { FunctionComponent, useState } from 'react';

interface IAccountsProps {}

const Accounts: FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const upvote = () => setCount(count + 1);
  return (
    <div>
      Accounts: {count}
      <button onClick={upvote}>Up</button>
    </div>
  );
};

export default Accounts;
