import React from 'react';
import { Box, Grid, Paper, Typography, useTheme } from '@mui/material';
import SongModel from 'models/Song';
import classnames from 'classnames';
import { formatCharLength } from 'utility';

interface IProps {
  song: SongModel;
}

export const Song = ({ song }: IProps) => {
  const theme = useTheme();

  return (
    <Grid item xs={12} md={6} lg={3}>
      <a
        href={song.trackViewUrl}
        target="_blank"
        rel="noreferrer"
        className="card-link"
        title={song.trackName}
      >
        <Paper
          variant="outlined"
          className={classnames('card song', {
            'card--dark': theme.palette.mode === 'dark',
            'card--light': theme.palette.mode !== 'dark'
          })}
        >
          <figure>
            <img src={song.artworkUrl60} alt={song.trackName} />
          </figure>

          <Box marginLeft={2}>
            <Typography variant="subtitle1" component="h4">
              {formatCharLength(song.trackName)}
            </Typography>

            <Typography variant="body2" component="p">
              {song.artistName}
            </Typography>
          </Box>
        </Paper>
      </a>
    </Grid>
  );
};
