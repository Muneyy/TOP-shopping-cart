import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Nav = () => {

  return (
    <nav className='nav-links'>
        <h3>PokeMart</h3>
        <ul className='nav-links-ul'>
            <Link to="/Home">
                <li>Home</li>
            </Link>
            <Link to="/Shop">
                <li>Shop</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
