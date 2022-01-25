import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  const getYear = (): number => {
    return new Date().getFullYear();
  };

  return (
    <footer className="footer">
      <Container>
        <Box className="footer__container">
          <Typography
            variant="body1"
            component="p"
            className="font-size-regular"
          >
            © {getYear()} Next technology - All rights reserved.
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
