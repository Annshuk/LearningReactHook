import React, { useReducer } from 'react';

import Greet from './Greet';
import Amount from './Amount';
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
  const [state, dispatch] = useReducer(changeName, {
    name: 'Test',
    number: 0,
  });

  const { name, number } = state;

  return (
    <>
      <Greet name={name} />
      <br />
      <GreetName dispatch={dispatch} />
      <br />
      <Amount number={number} />
      <br />
      <GreetName dispatch={dispatch} type="number" stateName="number" />
    </>
  );
};

export default App;
