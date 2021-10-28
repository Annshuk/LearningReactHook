import React, { useReducer } from 'react';

import { createStore, useStateMachine } from 'little-state-machine';

import Greet from './Greet';
import Amount from './Amount';
import GreetName from './GreetName';

import { updateNameAction } from './store';

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
  const { actions, state } = useStateMachine({ updateNameAction });

  console.log(state);
  return (
    <>
      <Greet name={state.name} />
      <br />
      <GreetName actionsUpdate={actions.updateNameAction} />
    </>
  );
};

export default App;
