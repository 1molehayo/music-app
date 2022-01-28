import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Album, EmptyCard, Loader } from 'components';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { isArrayEmpty, notify } from 'utility';
import InfiniteScroll from 'react-infinite-scroll-component';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import AlbumModel from 'models/Album';
import {
  fetchSearchResults,
  onFetchSearchSuccess,
  onSearchStart
} from 'store/actions';
import { ALBUM, MAXLENGTH } from 'utility/constants';

export const AlbumSection = () => {
  const { loading, albums } = useSelector((state: RootStateOrAny) => state);

  const [currentCursor, setCurrentCursor] = React.useState<number>(0);
  const [hasMore, setHasMore] = React.useState<boolean>(true);

  const dispatch = useDispatch();
  const { search } = useParams();

  const onSearch = React.useCallback(async () => {
    if (search) {
      dispatch(onSearchStart());

      try {
        const nextCursor = currentCursor ? currentCursor + 1 : 0;

        const result = await fetchSearchResults(
          search,
          ALBUM,
          MAXLENGTH,
          nextCursor
        );

        setCurrentCursor(currentCursor + MAXLENGTH);

        if (result.songs.length < MAXLENGTH) {
          setHasMore(false);
        }

        const newSongs = {
          albums: currentCursor
            ? [...albums, ...result.albums]
            : [...result.albums]
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
  }, [search, currentCursor, albums]);

  React.useEffect(() => {
    onSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InfiniteScroll
      dataLength={albums.length}
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
      hasMore={hasMore}
      loader={<Loader className="loader--inline" />}
    >
      {!currentCursor && loading && <Loader />}

      <section className="section">
        <Typography variant="h2" component="h1">
          Album Search Results
        </Typography>

        {!isArrayEmpty(albums) && (
          <Typography variant="body2" component="p" className="mt-2">
            About {albums.length} results
          </Typography>
        )}
      </section>

      <section className="section pt-0">
        {!isArrayEmpty(albums) && (
          <Grid container spacing={3} marginTop={2}>
            {albums.map((album: AlbumModel, i: number) => (
              <Album key={i} album={album} />
            ))}
          </Grid>
        )}

        {isArrayEmpty(albums) && (
          <EmptyCard
            iconComponent={<AudiotrackIcon />}
            text="No album available!"
          />
        )}
      </section>
    </InfiniteScroll>
  );
};
