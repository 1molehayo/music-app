import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ColorModeProvider from 'contexts/ColorMode';
import SearchProvider from 'contexts/Search';

import Home from './pages/Home';

function App() {
  return (
    <ColorModeProvider>
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home noLogo />} />
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </ColorModeProvider>
  );
}

export default App;
