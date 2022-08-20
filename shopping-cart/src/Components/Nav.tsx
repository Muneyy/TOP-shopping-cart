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
            <Link to="/TOP-shopping-cart/Home">
                <li>Home</li>
            </Link>
            <Link to="/TOP-shopping-cart/Shop">
                <li>Shop</li>
            </Link>
            <li>Items in Cart: {JSON.stringify(cartCount)}</li>
            <li>Total Cost: &#36;{JSON.stringify(currentCost)}</li>
        </ul>
    </nav>
  );
}

export default Nav;
