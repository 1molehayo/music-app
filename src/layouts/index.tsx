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
      <>
        {!props.noHeader && <Header />}

        <main className="page__body">
          <WrappedComponent {...componentProps} />
        </main>

        <Footer />
      </>
    );
  };
}
