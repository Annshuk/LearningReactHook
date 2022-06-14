import React, { memo } from 'react';

const Greet = ({ name }) => {
  return <>This is {name} from Input</>;
};

export default memo(Greet);
