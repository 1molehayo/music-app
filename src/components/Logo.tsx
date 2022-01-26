import { Box } from '@mui/material';
import React from 'react';
import logo from 'assets/images/itunes-logo.png';
import classNames from 'classnames';

interface ILogoProps {
  hasLink?: boolean;
  sm?: boolean;
}

const LogoComponent = () => (
  <>
    <img src={logo} alt="Music app" />
    <span>Music App</span>
  </>
);

export const Logo = ({ hasLink, sm }: ILogoProps) => {
  if (hasLink) {
    return (
      <a
        href="/"
        className={classNames('page__logo', { 'page__logo--alt': sm })}
      >
        <LogoComponent />
      </a>
    );
  }

  return (
    <Box className="page__logo">
      <LogoComponent />
    </Box>
  );
};
