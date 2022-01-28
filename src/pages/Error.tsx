import React from 'react';
import Layout from 'layouts';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="not-found">
      <Container>
        <section className="section">
          <Typography variant="h1" component="h1">
            404
          </Typography>

          <Typography variant="h4" component="h4">
            Page not found
          </Typography>

          <Link to="/">
            <Button className="button mt-4" variant="contained">
              Search for music
            </Button>
          </Link>
        </section>
      </Container>
    </div>
  );
}

export default Layout(Error);
