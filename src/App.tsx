import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import ColorModeProvider from 'contexts/ColorMode';
import SearchProvider from 'contexts/Search';
import { store } from 'store';

import Home from './pages/Home';
import SearchResults from './pages/Search';
import MusicDetails from './pages/Music';
import NotFound from './pages/Error';

function App() {
  return (
    <Provider store={store}>
      <ColorModeProvider>
        <SearchProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home noLogo />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/music/:type" element={<MusicDetails />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
          </BrowserRouter>
        </SearchProvider>
      </ColorModeProvider>
    </Provider>
  );
}

export default App;
