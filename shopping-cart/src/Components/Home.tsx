import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';
import '../App.css';
import Card from './Card';
import uniqid from 'uniqid';


const Home = ({cartItems, currentCost, setCartItems, setCartCount, setCurrentCost} : {
  cartItems: object[],
  currentCost: number,
  setCartItems: React.Dispatch<React.SetStateAction<object[]>>,
  setCartCount: React.Dispatch<React.SetStateAction<number>>,
  setCurrentCost: React.Dispatch<React.SetStateAction<number>>
}) => {

  return (
    <div className="Home">
      <h1>Shopping Cart</h1>
      <div className="card-container-cart">
        <div className="card-above">
          {cartItems.map((item: object) => (
                <Card item={item}
                      key={uniqid()}
                      setCartItems={setCartItems}
                      setCartCount = {setCartCount}
                      setCurrentCost = {setCurrentCost}
                      cardForShop = {false}
                      />
          ))}
        </div>
      </div>
      <h2>Total Cost: &#36;{currentCost}</h2>
    </div>
  );
}

export default Home;
