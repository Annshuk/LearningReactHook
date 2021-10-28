import React, { useReducer } from 'react';

import { StateMachineProvider, createStore } from 'little-state-machine';

import Greet from './Greet';
import Amount from './Amount';
import GreetName from './GreetName';

import './style.css';

const initialState = {
  name: '',
  amout: '',
  test: '',
};

createStore({ ...initialState });

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
    <StateMachineProvider>
      <Greet name={name} />
      <br />
      <GreetName dispatch={dispatch} />
    </StateMachineProvider>
  );
};

export default App;
