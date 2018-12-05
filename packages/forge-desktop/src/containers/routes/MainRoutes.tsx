import React, { FunctionComponent, useState } from 'react';

interface IMainRoutesProps {}

const MainRoutes: FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const upvote = () => setCount(count + 1);
  return (
    <div>
      MainRoutes: {count}
      <button onClick={upvote}>Up</button>
    </div>
  );
};

export default MainRoutes;
