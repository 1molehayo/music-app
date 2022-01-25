import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Layout from 'layouts';
import logo from 'assets/images/itunes-logo.png';

function Home() {
  return (
    <Container>
      <section className="section">
        <Typography variant="h1" component="h1">
          Home
        </Typography>

        <Box className="logo">
          <img src={logo} alt="Music app" />
          <span>Music App</span>
        </Box>
      </section>
    </Container>
  );
}

export default Layout(Home);
