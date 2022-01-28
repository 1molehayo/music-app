import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Artist, EmptyCard, Loader } from 'components';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { isArrayEmpty, notify } from 'utility';
import InfiniteScroll from 'react-infinite-scroll-component';
import PersonIcon from '@mui/icons-material/Person';
import ArtistModel from 'models/Artist';
import {
  fetchSearchResults,
  onFetchSearchSuccess,
  onSearchStart
} from 'store/actions';
import { ARTIST, MAXLENGTH } from 'utility/constants';

export const ArtistSection = () => {
  const { loading, artists } = useSelector((state: RootStateOrAny) => state);

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
          ARTIST,
          MAXLENGTH,
          nextCursor
        );

        setCurrentCursor(currentCursor + MAXLENGTH);

        if (result.artists.length < MAXLENGTH) {
          setHasMore(false);
        }

        const newArtists = {
          artists: currentCursor
            ? [...artists, ...result.artists]
            : [...result.artists]
        };

        dispatch(onFetchSearchSuccess(newArtists));
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
  }, [search, currentCursor, artists]);

  React.useEffect(() => {
    onSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InfiniteScroll
      dataLength={artists.length}
      next={() => setTimeout(() => onSearch(), 500)}
      endMessage={
        <Typography variant="subtitle1" component="h4">
          <b>Yay! You have seen it all</b>
        </Typography>
      }
      hasMore={hasMore}
      loader={<Loader className="loader--inline" />}
    >
      {!currentCursor && loading && <Loader />}

      <section className="section">
        <Typography variant="h2" component="h1">
          Artist Search Results
        </Typography>

        {!isArrayEmpty(artists) && (
          <Typography variant="body2" component="p" className="mt-2">
            About {artists.length} results
          </Typography>
        )}
      </section>

      <section className="section pt-0">
        {!isArrayEmpty(artists) && (
          <Grid container spacing={3} marginTop={2}>
            {artists.map((artist: ArtistModel, i: number) => (
              <Artist key={i} artist={artist} />
            ))}
          </Grid>
        )}

        {isArrayEmpty(artists) && (
          <EmptyCard
            iconComponent={<PersonIcon />}
            text="No artist available!"
          />
        )}
      </section>
    </InfiniteScroll>
  );
};
