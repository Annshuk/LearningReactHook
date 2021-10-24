import React, { memo } from 'react';

const GreetName = ({ name, onChange }) => {
  console.log('GreetName render');

  return <input type="text" value={name} onChange={onChange} />;
};

export default memo(GreetName);
