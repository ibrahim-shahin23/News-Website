import React from 'react';
import './CustomNavbar.css';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {

  return (
    <nav className="navbar bg-secondary navbar-expand-sm ">
        <Link className="navbar-brand"style={{ marginLeft: '20px' }} to="/">
          News
        </Link>
        <Link className="navbar-brand"style={{ marginLeft: '10px' }} to="/gold&currencies">
        gold & currencies
        </Link>
    </nav>
  );
};

export default CustomNavbar;
