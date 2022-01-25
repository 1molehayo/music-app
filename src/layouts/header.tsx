import React, { useContext } from 'react';
import { Box, Container, IconButton, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from 'contexts/ColorMode';
import { capitalizeFirstLetter } from 'utility';
import logo from 'assets/images/itunes-logo.png';

const Header = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <header className="header">
      <Container>
        <Box className="header__container">
          <a href="/">
            <img src={logo} alt="Music app" />
            <span>Music App</span>
          </a>

          <Box className="color-switch" onClick={colorMode.toggleColorMode}>
            <Typography component="span">
              {capitalizeFirstLetter(theme.palette.mode)} mode
            </Typography>

            <IconButton color="inherit" className="color-switch__icon">
              {theme.palette.mode === 'dark' ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Box>
        </Box>
      </Container>
    </header>
  );
};

export default Header;
