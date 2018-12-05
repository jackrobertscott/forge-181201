import React, { FunctionComponent, useState } from 'react';

interface ICodeMenuProps {}

const CodeMenu: FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const upvote = () => setCount(count + 1);
  return (
    <div>
      CodeMenu: {count}
      <button onClick={upvote}>Up</button>
    </div>
  );
};

export default CodeMenu;
