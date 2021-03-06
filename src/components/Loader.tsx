import React from 'react';
import { Box, CircularProgress, circularProgressClasses } from '@mui/material';
import classnames from 'classnames';

interface ILoader {
  className?: string;
}

export const Loader: React.FC<ILoader> = ({ className }) => {
  return (
    <Box className={classnames('loader', className)}>
      <Box className="loader__inner">
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
            color: '#eb172f',
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
