import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../assert/css/layout/layout.css';

const Layout = ({ children }) => {
  return (
    <div className="context">
      <div className="main">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
