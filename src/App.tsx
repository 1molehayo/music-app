import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ColorModeProvider from 'contexts/ColorMode';
import Home from './pages/Home';

function App() {
  return (
    <ColorModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ColorModeProvider>
  );
}

export default App;
