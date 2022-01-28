import React from 'react';
import { Box, Typography } from '@mui/material';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

interface IEmptyProps {
  iconComponent?: React.ReactNode;
  text?: string;
}

export const EmptyCard: React.FC<IEmptyProps> = ({ iconComponent, text }) => {
  return (
    <Box className="empty-card">
      <Box marginBottom={1}>{iconComponent ?? <FolderOpenIcon />}</Box>

      <Typography variant="body1" component="p">
        {text ?? 'No data available!'}
      </Typography>
    </Box>
  );
};
