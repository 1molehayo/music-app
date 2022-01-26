import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ColorModeProvider from 'contexts/ColorMode';
import SearchProvider from 'contexts/Search';

import Home from './pages/Home';
import SearchResults from './pages/Search';
import MusicDetails from './pages/Music';

function App() {
  return (
    <ColorModeProvider>
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home noLogo />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/music/:type" element={<MusicDetails />} />
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </ColorModeProvider>
  );
}

export default App;
