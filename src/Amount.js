import React, { memo } from 'react';

const Amount = ({ number }) => {
  console.log('Amount render', number);

  return <>This Total: {number}</>;
};

export default memo(Amount);
