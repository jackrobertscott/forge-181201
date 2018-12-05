import React, { FunctionComponent, useState } from 'react';

interface IPreviewBundleProps {}

const PreviewBundle: FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const upvote = () => setCount(count + 1);
  return (
    <div>
      PreviewBundle: {count}
      <button onClick={upvote}>Up</button>
    </div>
  );
};

export default PreviewBundle;
