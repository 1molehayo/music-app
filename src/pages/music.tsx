import React from 'react';
import { Container } from '@mui/material';
import Layout from 'layouts';
import { ALBUM, ARTIST } from 'utility/constants';
import { useParams } from 'react-router-dom';
import {
  AlbumSection,
  ArtistSection,
  SongSection
} from 'components/music-sections';

function Music() {
  const { type } = useParams();

  const getSection = () => {
    switch (type) {
      case ALBUM:
        return <AlbumSection />;

      case ARTIST:
        return <ArtistSection />;

      default:
        return <SongSection />;
    }
  };

  return (
    <div className="music">
      <Container>{getSection()}</Container>
    </div>
  );
}

export default Layout(Music);
