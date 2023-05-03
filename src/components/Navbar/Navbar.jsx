import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = (props) => {
  return (
    <div className="nav-container">
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : '')}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : '')}
          to="posts"
        >
          Posts
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : '')}
          to="about"
        >
          About
        </NavLink>
      </li>
    </div>
  );
};

export default Navbar;
