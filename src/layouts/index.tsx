import { Box } from '@mui/material';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface IProps {
  children?: React.ReactNode;
  noLogo?: boolean;
}

export default function Layout(WrappedComponent: React.FC) {
  // eslint-disable-next-line react/display-name
  return (props: JSX.IntrinsicAttributes & IProps) => {
    const componentProps = { ...props };
    delete componentProps.noLogo;

    return (
      <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
        <Header noLogo={props.noLogo} />

        <main className="page__body">
          <WrappedComponent {...componentProps} />
        </main>

        <Footer />
      </Box>
    );
  };
}
