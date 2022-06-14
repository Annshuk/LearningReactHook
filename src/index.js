import React from 'react';
import { createRoot } from 'react-dom/client';
import { render } from 'react-dom';
import { StateMachineProvider, createStore } from 'little-state-machine';
import 'bootstrap/dist/css/bootstrap.min.css';

import { initialState } from './store';
import App from './App';

createStore(initialState);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StateMachineProvider>
    <App />
  </StateMachineProvider>
);
