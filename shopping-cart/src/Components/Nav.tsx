import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Nav = ({cartCount, currentCost} : {
  cartCount: number,
  currentCost: number
}) => {

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
            <li>Items in Cart: {JSON.stringify(cartCount)}</li>
            <li>Total Cost: {JSON.stringify(currentCost)}</li>
        </ul>
    </nav>
  );
}

export default Nav;
