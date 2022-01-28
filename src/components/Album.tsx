import React from 'react';
import { Grid, Paper, Typography, useTheme } from '@mui/material';
import AlbumModel from 'models/Album';
import classnames from 'classnames';
import { formatCharLength } from 'utility';

interface IProps {
  album: AlbumModel;
}

export const Album = ({ album }: IProps) => {
  const theme = useTheme();

  return (
    <Grid item xs={12} md={4} lg={3}>
      <a
        href={album.collectionViewUrl}
        target="_blank"
        rel="noreferrer"
        className="card-link"
        title={album.collectionName}
      >
        <Paper
          variant="outlined"
          className={classnames('card album', {
            'card--dark': theme.palette.mode === 'dark',
            'card--light': theme.palette.mode !== 'dark'
          })}
        >
          <figure>
            <img src={album.artworkUrl100} alt={album.artistName} />
          </figure>

          <Typography variant="subtitle1" component="h4">
            {formatCharLength(album.collectionName, 60)}
          </Typography>

          <Typography variant="body2" component="p" marginTop={0.5}>
            {album.artistName}
          </Typography>
        </Paper>
      </a>
    </Grid>
  );
};
