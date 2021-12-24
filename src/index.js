import React from 'react';
import { render } from 'react-dom';
import { StateMachineProvider, createStore } from 'little-state-machine';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

const initialState = {
  name: '',
  amout: '',
  test: '',
};

createStore({ ...initialState });

render(
  <StateMachineProvider>
    <App />
  </StateMachineProvider>,
  document.getElementById('root')
);
