/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  createContext,
  useState,
  ReactChild,
  ReactChildren
} from 'react';

interface ISearchProps {
  loading: boolean;
  searchValue: string;
  updateSearch?: React.SetStateAction<any>;
  toggleLoader?: React.SetStateAction<any>;
}

const ContextDefaultValues: ISearchProps = {
  loading: false,
  searchValue: ''
};

export const SearchContext = createContext<ISearchProps>(ContextDefaultValues);

interface IProps {
  children: ReactChild | ReactChildren;
}

const SearchProvider = ({ children }: IProps) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const toggleLoader = (): void => setLoading((prevState) => !prevState);
  const updateSearch = (val: string): void => setSearchValue(val);

  return (
    <SearchContext.Provider
      value={{
        loading,
        searchValue,
        updateSearch,
        toggleLoader
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
