import React, { FunctionComponent, useState } from 'react';

interface IEditCodeProps {}

const EditCode: FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const upvote = () => setCount(count + 1);
  return (
    <div>
      EditCode: {count}
      <button onClick={upvote}>Up</button>
    </div>
  );
};

export default EditCode;
