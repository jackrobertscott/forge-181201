import React, { FunctionComponent, useState } from 'react';

interface ICreateCodeProps {}

const CreateCode: FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const upvote = () => setCount(count + 1);
  return (
    <div>
      CreateCode: {count}
      <button onClick={upvote}>Up</button>
    </div>
  );
};

export default CreateCode;
