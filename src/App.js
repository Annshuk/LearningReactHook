import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Example from './Example';
import { Kanban } from './Kanban';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Example />} />
        <Route path="/kanban" element={<Kanban />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
