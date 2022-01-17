import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="divide-y divide-stone-200">
      <div className="header-container py-2 px-8 md:max-w-7xl mx-auto md:flex items-center justify-between space-x-4 space-y-4 md:space-y-0">
        <div className="text-2xl font-extrabold">
          <Link to="/">
            <p>Math Magicians</p>
          </Link>
        </div>

        <div id="meals-counter" />

        <div className="nav grid grid-cols-3 divide-x font-bold w-auto text-sm">
          <Link to="/" className="flex items-center justify-center nav-item">
            Home
          </Link>
          <Link
            to="/calculator"
            className="grid items-center justify-center px-3 nav-item"
          >
            Calculator
          </Link>
          <Link
            to="/quote"
            className="grid items-center justify-center nav-item"
          >
            Quote
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
