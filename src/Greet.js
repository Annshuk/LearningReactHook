import React, { memo } from 'react';

const Greet = ({ name }) => {
  console.log('Greet render');
  return <>This is {name} from Input</>;
};

export default memo(Greet);
