import React from 'react';
import { Container, Typography } from '@mui/material';
import Layout from 'layouts';
import { Loader, SearchBar } from 'components';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from 'contexts/Search';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import {
  fetchSearchResults,
  onFetchSearchSuccess,
  onSearchStart
} from 'store/actions';
import { notify } from 'utility';

function Search() {
  const { searchValue, updateSearch } = React.useContext(SearchContext);
  const { albums, artists, loading, songs } = useSelector(
    (state: RootStateOrAny) => state
  );

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const onSearch = async (value?: string) => {
    dispatch(onSearchStart());

    try {
      const result = await fetchSearchResults(value ?? searchValue);
      dispatch(onFetchSearchSuccess(result));

      navigate({
        pathname: '/search',
        search: `?query=${searchValue}`
      });
    } catch (err) {
      if (err instanceof Error) {
        notify({
          type: 'error',
          message: err.message
        });
      }
    }
  };

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

        <section>
          <Typography variant="h2" component="h1">
            Search Results
          </Typography>
        </section>
      </Container>
    </div>
  );
}

export default Layout(Search);
