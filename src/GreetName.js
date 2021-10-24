import React, { memo } from 'react';

const GreetName = ({ name }) => {
  console.log('GreetName render');

  return <>This is {name} from Input</>;
};

export default memo(GreetName);
