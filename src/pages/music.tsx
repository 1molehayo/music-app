import React from 'react';
import { Container, Typography } from '@mui/material';
import Layout from 'layouts';
// import { Logo, SearchBar } from 'components';

function Music() {
  return (
    <div className="music">
      <Container>
        <section>
          <Typography variant="h2" component="h1">
            Music details
          </Typography>
        </section>
      </Container>
    </div>
  );
}

export default Layout(Music);
