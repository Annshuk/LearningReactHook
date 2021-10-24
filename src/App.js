import React, { useReducer, useCallback } from 'react';

import Greet from './Greet';
import GreetName from './GreetName';

import './style.css';

const changeName = (state, action) => ({
  ...state,
  ...action,
});

/**
 * App
 * use of memo and hook callbacks,
 *
 * how you can prevent re-render
 */
const App = ({ intialValue = 'Anshuk' }) => {
  console.log('master');
  const [state, setState] = useReducer(changeName, { name: intialValue });

  const { name } = state;

  /**
   * handleChange
   * using callback hook prevent to render another child componet
   */
  const handleChange = useCallback((event) => {
    setState({ name: event.target.value });
  }, []);

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />

      <br />
      <Greet name={name} onChange={handleChange} />
      <br />
      <GreetName onChange={handleChange} />
    </div>
  );
};

export default App;
