import React from 'react';
import Layout from 'layouts';
import { Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();

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

          <Button
            className="button mt-4"
            variant="contained"
            onClick={() => navigate('/')}
          >
            Search for music
          </Button>
        </section>
      </Container>
    </div>
  );
}

export default Layout(Error);
