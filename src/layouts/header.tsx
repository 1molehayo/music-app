import React from 'react';
import { Box, Container } from '@mui/material';
import { Logo } from 'components/Logo';
import classNames from 'classnames';
import { ColorSwitch } from 'components';

interface IHeaderProps {
  noLogo?: boolean;
}

const Header = ({ noLogo }: IHeaderProps) => {
  return (
    <header className="header">
      <Container>
        <Box
          className={classNames('header__container', {
            'header__container--alt': noLogo
          })}
        >
          {!noLogo && <Logo sm hasLink />}

          <ColorSwitch />
        </Box>
      </Container>
    </header>
  );
};

export default Header;
