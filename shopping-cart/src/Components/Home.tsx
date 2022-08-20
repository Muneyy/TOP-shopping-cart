import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';
import '../App.css';
import Card from './Card';
import uniqid from 'uniqid';


const Home = ({cartItems, currentCost} : {
  cartItems: object[],
  currentCost: number
}) => {

  return (
    <div className="Home">
      <h1>Shopping Cart</h1>
      <div className="card-container-cart">
        {cartItems.map((item: any) => (
            <div className="card-above" key ={uniqid()}>
              <Card item={item}/>
            </div>
        ))}
      </div>
      <h2>Total Cost: &#36;{currentCost}</h2>
    </div>
  );
}

export default Home;
