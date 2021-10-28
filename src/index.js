import React from 'react';
import ReactDOM from 'react-dom';
import { StateMachineProvider, createStore } from 'little-state-machine';

import App from './App';

const initialState = {
  name: '',
  amout: '',
  test: '',
};

createStore({ ...initialState });

ReactDOM.render(
  <StateMachineProvider>
    <App />
  </StateMachineProvider>,
  document.getElementById('root')
);
