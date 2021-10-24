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
  const [state, dispatch] = useReducer(changeName, { name: intialValue });

  const { name } = state;

  return (
    <div>
      <Greet name={name} />
      <br />
      <GreetName dispatch={dispatch} />
    </div>
  );
};

export default App;
