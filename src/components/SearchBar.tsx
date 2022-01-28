import React from 'react';
import classnames from 'classnames';
import { Box, TextField, InputAdornment } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { SearchOutlined, CloseOutlined } from '@mui/icons-material';
import { SearchContext } from 'contexts/Search';
// import { useNavigate } from 'react-router-dom';

interface ISearchProps {
  className?: string;
  loading?: boolean;
  noButton?: boolean;
  onSearch?: () => void;
}

export const SearchBar = ({
  className,
  loading,
  noButton,
  onSearch
}: ISearchProps) => {
  const { searchValue, updateSearch } = React.useContext(SearchContext);

  const handleSearch = (event?: { key: string }) => {
    if (!event || event.key === 'Enter') {
      if (searchValue) {
        if (onSearch) {
          onSearch();
        }
      }
    }
  };

  return (
    <Box className={classnames('searchbar', className)}>
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
              <InputAdornment position="end" className="cursor">
                {searchValue && (
                  <CloseOutlined
                    className="searchbar__icon mr-1"
                    onClick={() => updateSearch('')}
                  />
                )}
                <SearchOutlined
                  className="searchbar__icon"
                  onClick={() => handleSearch()}
                />
              </InputAdornment>
            )
          }}
          inputProps={{
            'aria-label': 'search-input'
          }}
        />
      </Box>

      {!noButton && (
        <LoadingButton
          className="button"
          onClick={() => handleSearch()}
          loading={loading}
          variant="contained"
          disabled={!searchValue}
          aria-label="search-button"
        >
          Search Music
        </LoadingButton>
      )}
    </Box>
  );
};
