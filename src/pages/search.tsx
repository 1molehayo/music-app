import React from 'react';
import { Container, Typography } from '@mui/material';
import Layout from 'layouts';
// import { Logo, SearchBar } from 'components';

function Search() {
  return (
    <div className="search">
      <Container>
        <section>
          <Typography variant="h2" component="h1">
            Search Results
          </Typography>
        </section>
      </Container>
    </div>
  );
}

export default Layout(Search);
