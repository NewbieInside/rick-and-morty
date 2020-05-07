import React from 'react';
import './Headers.css';

const Header = () => {
  return (
    <div className="header-container">
      <nav className="navbar">
        <h1 className="logo">Rick & Morty</h1>
        <ul>
          <li>Login</li>
          <li>Signup</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
