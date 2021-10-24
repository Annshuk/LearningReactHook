import React, { useReducer } from 'react';

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
const App = () => {
  const [state, dispatch] = useReducer(changeName, { name: 'Test' });

  const { name } = state;

  return (
    <>
      <Greet name={name} />
      <br />
      <GreetName dispatch={dispatch} />
    </>
  );
};

export default App;
