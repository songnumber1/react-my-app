import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../assert/css/layout/layout.css';
import Spinner from 'react-bootstrap/Spinner';

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Spinner animation="grow" />
      </div>
      <div className="context">
        <div className="main">
          <Header />
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
