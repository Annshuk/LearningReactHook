import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Example from './Example';
import { Kanban } from './Kanban';
import { BookLists } from './BookLists';

const App = () => {
  const ref = useRef(0);

  useEffect(() => {
    console.log('this is effect', ref.current);
  }, []);

  useLayoutEffect(() => {
    ref.current = 1;
    console.log('this is layout effect', ref.current);
  }, []);

  console.log('this is ct', ref.current);

  return (
    <>
      {ref.current}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Example />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/BookLists" element={<BookLists />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
