import { Box } from '@mui/material';
import classNames from 'classnames';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface IProps {
  children?: React.ReactNode;
  noHeader?: boolean;
}

export default function Layout(WrappedComponent: React.FC) {
  // eslint-disable-next-line react/display-name
  return (props: JSX.IntrinsicAttributes & IProps) => {
    const componentProps = { ...props };
    delete componentProps.noHeader;

    return (
      <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
        {!props.noHeader && <Header />}

        <main
          className={classNames('page__body', {
            'page__body--no-header': props.noHeader
          })}
        >
          <WrappedComponent {...componentProps} />
        </main>

        <Footer />
      </Box>
    );
  };
}
