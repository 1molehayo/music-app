import React, { useContext } from 'react';
import { Box, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from 'contexts/ColorMode';

const Header = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <header className="header">
      <Box>
        <Box className="header__container">
          <a href="/">
            Logo
            <span className="icon-logo header__logo" />
          </a>
        </Box>
        {theme.palette.mode} mode
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === 'dark' ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Box>

      <hr className="divider" />
    </header>
  );
};

export default Header;
