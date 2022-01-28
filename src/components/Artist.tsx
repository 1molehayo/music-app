import React from 'react';
import { Grid, Paper, Typography, useTheme } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArtistModel from 'models/Artist';
import classnames from 'classnames';

interface IProps {
  artist: ArtistModel;
}

export const Artist = ({ artist }: IProps) => {
  const theme = useTheme();

  return (
    <Grid item xs={12} md={4} lg={3}>
      <a
        href={artist.artistLinkUrl}
        target="_blank"
        rel="noreferrer"
        className="card-link"
        title={artist.artistName}
      >
        <Paper
          variant="outlined"
          className={classnames('card artist', {
            'card--dark': theme.palette.mode === 'dark',
            'card--light': theme.palette.mode !== 'dark'
          })}
        >
          <figure>
            <AccountCircleIcon />
          </figure>

          <Typography variant="subtitle1" component="h4">
            {artist.artistName}
          </Typography>

          <Typography variant="body1" component="p" marginTop={0.5}>
            {artist.artistType}
          </Typography>
        </Paper>
      </a>
    </Grid>
  );
};
