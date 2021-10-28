import React from 'react';

import { useStateMachine } from 'little-state-machine';

import Greet from './Greet';
import Amount from './Amount';
import GreetName from './GreetName';

import { updateNameAction } from './store';

import './style.css';

/**
 * App
 * use of memo and hook callbacks,
 *
 * how you can prevent re-render
 */
const App = () => {
  const { actions, state } = useStateMachine({ updateNameAction });

  return (
    <>
      <Greet name={state.name} />
      <br />
      <GreetName actionsUpdate={actions.updateNameAction} />
    </>
  );
};

export default App;
