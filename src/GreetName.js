import React, { useCallback, memo } from 'react';

const GreetName = ({ dispatch }) => {
  /**
   * handleChange
   * using callback hook prevent to render another child componet
   */
  const handleChange = useCallback((event) => {
    dispatch({ name: event.target.value });
  }, []);

  return <input type="text" onChange={handleChange} />;
};

export default memo(GreetName);
