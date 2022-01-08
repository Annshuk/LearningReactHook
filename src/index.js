import React from 'react';
import { render } from 'react-dom';
import { StateMachineProvider, createStore } from 'little-state-machine';
import 'bootstrap/dist/css/bootstrap.min.css';

import { initialState } from './store';
import App from './App';

createStore(initialState);

render(
  <StateMachineProvider>
    <App />
  </StateMachineProvider>,
  document.getElementById('root')
);
