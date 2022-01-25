import React from 'react';
import { Container, Typography } from '@mui/material';
import Layout from 'layouts';

function Home() {
  return (
    <Container>
      <section className="section">
        <Typography variant="h1" component="h1">
          Home
        </Typography>
      </section>
    </Container>
  );
}

export default Layout(Home);
