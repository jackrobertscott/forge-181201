import React, { FunctionComponent, useState } from 'react';

interface IProfileProps {}

const Profile: FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const upvote = () => setCount(count + 1);
  return (
    <div>
      Profile: {count}
      <button onClick={upvote}>Up</button>
    </div>
  );
};

export default Profile;
