import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Layout from 'layouts';
import { Album, Artist, EmptyCard, Loader, SearchBar, Song } from 'components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from 'contexts/Search';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import {
  fetchSearchResults,
  onFetchSearchSuccess,
  onSearchStart
} from 'store/actions';
import { isArrayEmpty, notify } from 'utility';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import PersonIcon from '@mui/icons-material/Person';
import SongModel from 'models/Song';
import ArtistModel from 'models/Artist';
import AlbumModel from 'models/Album';

function Search() {
  const { searchValue, updateSearch } = React.useContext(SearchContext);
  const { albums, artists, loading, songs } = useSelector(
    (state: RootStateOrAny) => state
  );

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const onSearch = React.useCallback(
    async (value?: string) => {
      dispatch(onSearchStart());

      try {
        const result = await fetchSearchResults(value ?? searchValue);
        dispatch(onFetchSearchSuccess(result));

        if (!value) {
          navigate({
            pathname: '/search',
            search: `?query=${searchValue}`
          });
        }
      } catch (err) {
        if (err instanceof Error) {
          notify({
            type: 'error',
            message: err.message
          });
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchValue]
  );

  React.useEffect(() => {
    if (location.search) {
      const arr = location.search.split('=');
      updateSearch(arr[1]);
      onSearch(arr[1]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  return (
    <div className="search">
      {loading && <Loader />}

      <Container>
        <SearchBar
          noButton
          className="searchbar--alt"
          onSearch={() => onSearch()}
        />

        <section className="section">
          <Typography variant="h2" component="h1">
            Search Results
          </Typography>
        </section>

        <section className="section pt-0">
          <Box className="w-100 d-flex justify-between">
            <Typography variant="h4" component="h2">
              Songs
            </Typography>

            {!isArrayEmpty(songs) && (
              <Link to={`/music/song/${searchValue}`} className="">
                <Button className="button" variant="text">
                  See all
                </Button>
              </Link>
            )}
          </Box>

          {!isArrayEmpty(songs) && (
            <Grid container spacing={3} marginTop={2}>
              {songs.slice(0, 4).map((song: SongModel, i: number) => (
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

        <section className="section pt-0">
          <Box className="w-100 d-flex justify-between">
            <Typography variant="h4" component="h2">
              Artists
            </Typography>

            {!isArrayEmpty(artists) && (
              <Link to={`/music/artist/${searchValue}`} className="">
                <Button className="button" variant="text">
                  See all
                </Button>
              </Link>
            )}
          </Box>

          {!isArrayEmpty(artists) && (
            <Grid container spacing={3} marginTop={2}>
              {artists.slice(0, 4).map((artist: ArtistModel, i: number) => (
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

        <section className="section pt-0">
          <Box className="w-100 d-flex justify-between">
            <Typography variant="h4" component="h2">
              Albums
            </Typography>

            {!isArrayEmpty(albums) && (
              <Link to={`/music/album/${searchValue}`} className="">
                <Button className="button" variant="text">
                  See all
                </Button>
              </Link>
            )}
          </Box>

          {!isArrayEmpty(albums) && (
            <Grid container spacing={3} marginTop={2}>
              {albums.slice(0, 4).map((album: AlbumModel, i: number) => (
                <Album key={i} album={album} />
              ))}
            </Grid>
          )}

          {isArrayEmpty(albums) && (
            <EmptyCard
              iconComponent={<LibraryMusicIcon />}
              text="No album available!"
            />
          )}
        </section>
      </Container>
    </div>
  );
}

export default Layout(Search);
