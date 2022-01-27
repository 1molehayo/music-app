import React from 'react';
import { Container } from '@mui/material';
import Layout from 'layouts';
import { Logo, SearchBar } from 'components';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from 'contexts/Search';

function Home() {
  const { searchValue } = React.useContext(SearchContext);
  const navigate = useNavigate();

  return (
    <div className="home">
      <Container>
        <section>
          <Logo />

          <SearchBar
            onSearch={() =>
              navigate({
                pathname: '/search',
                search: `?query=${searchValue}`
              })
            }
          />
        </section>
      </Container>
    </div>
  );
}

export default Layout(Home);
