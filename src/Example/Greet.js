import React, { memo } from 'react';

const Greet = ({ name }) => {
  console.log('Greet render', name);

  return <>This is {name} from Input</>;
};

export default memo(Greet);
