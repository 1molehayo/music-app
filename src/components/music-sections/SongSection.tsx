import React from 'react';
import { Grid, Typography } from '@mui/material';
import { EmptyCard, Loader, Song } from 'components';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { isArrayEmpty, notify } from 'utility';
import InfiniteScroll from 'react-infinite-scroll-component';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import SongModel from 'models/Song';
import {
  fetchSearchResults,
  onFetchSearchSuccess,
  onSearchStart
} from 'store/actions';
import { MAXLENGTH, SONG } from 'utility/constants';

export const SongSection = () => {
  const { loading, songs } = useSelector((state: RootStateOrAny) => state);

  const [currentCursor, setCurrentCursor] = React.useState<number>(0);
  const [hasMore, setHasMore] = React.useState<boolean>(true);

  const dispatch = useDispatch();
  const { search } = useParams();

  const onSearch = React.useCallback(async () => {
    if (search && !loading) {
      dispatch(onSearchStart());

      try {
        const nextCursor = currentCursor ? currentCursor + 1 : 0;

        const result = await fetchSearchResults(
          search,
          SONG,
          MAXLENGTH,
          nextCursor
        );

        setCurrentCursor(currentCursor + MAXLENGTH);

        if (result.songs.length < MAXLENGTH) {
          setHasMore(false);
        }

        const newSongs = {
          songs: currentCursor ? [...songs, ...result.songs] : [...result.songs]
        };

        dispatch(onFetchSearchSuccess(newSongs));
      } catch (err) {
        if (err instanceof Error) {
          notify({
            type: 'error',
            message: err.message
          });
        }
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, search, currentCursor, songs]);

  React.useEffect(() => {
    onSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InfiniteScroll
      dataLength={songs.length}
      next={() => setTimeout(() => onSearch(), 500)}
      endMessage={
        <Typography
          variant="subtitle1"
          component="h4"
          className="text-center mb-4"
        >
          <b>Yay! You have seen it all</b>
        </Typography>
      }
      hasMore={!loading && hasMore}
      loader={<Loader className="loader--inline" />}
    >
      {!currentCursor && loading && <Loader />}

      <section className="section">
        <Typography variant="h2" component="h1">
          Song Search Results
        </Typography>

        {!isArrayEmpty(songs) && (
          <Typography variant="body2" component="p" className="mt-2">
            About {songs.length} results
          </Typography>
        )}
      </section>

      <section className="section pt-0">
        {!isArrayEmpty(songs) && (
          <Grid container spacing={3} marginTop={2}>
            {songs.map((song: SongModel, i: number) => (
              <Song key={i} song={song} />
            ))}
          </Grid>
        )}

        {isArrayEmpty(songs) && (
          <EmptyCard
            iconComponent={<AudiotrackIcon />}
            text="No song available!"
          />
        )}
      </section>
    </InfiniteScroll>
  );
};
