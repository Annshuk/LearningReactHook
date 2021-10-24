import React, { memo } from 'react';

const GreetName = ({ dispatch, stateName = 'name', ...rest }) => {
  /**
   * handleChange
   *
   */
  const handleChange = (event) => {
    dispatch({ [stateName]: event.target.value });
  };

  console.log('Greet render');

  return <input type="text" onChange={handleChange} {...rest} />;
};

export default memo(GreetName);
