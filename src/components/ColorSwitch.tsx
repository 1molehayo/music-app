import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from 'contexts/ColorMode';
import { capitalizeFirstLetter } from 'utility';

export const ColorSwitch = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
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
  );
};
