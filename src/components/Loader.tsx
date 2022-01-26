import React from 'react';
import { Box, CircularProgress, circularProgressClasses } from '@mui/material';

export const Loader = () => {
  return (
    <Box className="loader-wrapper">
      <Box className="loader">
        <CircularProgress
          variant="determinate"
          sx={{
            color: (theme) =>
              theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
          }}
          size={40}
          thickness={4}
          value={100}
        />

        <CircularProgress
          variant="indeterminate"
          disableShrink
          sx={{
            color: (theme) =>
              theme.palette.mode === 'light' ? '#eb172f' : '#eb172f',
            animationDuration: '550ms',
            position: 'absolute',
            left: 0,
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: 'round'
            }
          }}
          size={40}
          thickness={4}
        />
      </Box>
    </Box>
  );
};
