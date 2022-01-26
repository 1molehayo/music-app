import React from 'react';
import { Box, TextField, InputAdornment } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { SearchOutlined } from '@mui/icons-material';
import { SearchContext } from 'contexts/Search';

export const SearchBar = () => {
  const { loading, searchValue, updateSearch } =
    React.useContext(SearchContext);

  const handleSearch = (event?: { key: string }) => {
    if (!event || event.key === 'Enter') {
      // search
      // eslint-disable-next-line no-console
      console.log(`You searched for ${searchValue}`);
    }
  };

  return (
    <Box className="searchbar">
      <Box className="searchbar__inner">
        <TextField
          id="search"
          label="Artists, songs, or albums"
          variant="outlined"
          className="searchbar__input"
          value={searchValue}
          onChange={(e) => updateSearch(e.target.value)}
          onKeyDown={handleSearch}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchOutlined className="searchbar__icon" />
              </InputAdornment>
            )
          }}
        />
      </Box>

      <LoadingButton
        className="button"
        onClick={() => handleSearch()}
        loading={loading}
        variant="contained"
        disabled={!searchValue}
      >
        Search Music
      </LoadingButton>
    </Box>
  );
};
