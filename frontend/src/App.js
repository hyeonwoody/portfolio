
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Introduction from './pages/Introduction';

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Introduction />}></Route>
          </Routes>
      </BrowserRouter>
    
  );
}

export default App;
