import React, { ReactChild, ReactChildren } from 'react';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: ReactChild | ReactChildren;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />

      <main className="page__body">{children}</main>

      <Footer />
    </>
  );
}
