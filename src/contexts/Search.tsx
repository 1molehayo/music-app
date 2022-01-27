/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  createContext,
  useState,
  ReactChild,
  ReactChildren
} from 'react';

interface ISearchProps {
  searchValue: string;
  updateSearch?: React.SetStateAction<any>;
}

const ContextDefaultValues: ISearchProps = {
  searchValue: ''
};

export const SearchContext = createContext<ISearchProps>(ContextDefaultValues);

interface IProps {
  children: ReactChild | ReactChildren;
}

const SearchProvider: React.FC<IProps> = ({ children }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const updateSearch = (val: string): void => setSearchValue(val);

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        updateSearch
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
