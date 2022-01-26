import React from 'react';
import { Container } from '@mui/material';
import Layout from 'layouts';
import { Logo, SearchBar } from 'components';

function Home() {
  return (
    <div className="home">
      <Container>
        <section>
          <Logo />

          <SearchBar />
        </section>
      </Container>
    </div>
  );
}

export default Layout(Home);
