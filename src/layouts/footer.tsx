import React from 'react';

const Footer = () => {
  const getYear = (): number => {
    return new Date().getFullYear();
  };

  return (
    <footer className="footer">
      <div className="container footer__container">
        <p className="footer__text copyright">
          © {getYear()} Next technology - All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
