import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';
import '../App.css';


const Home = ({cartItems} : {
  cartItems: object[]
}) => {



  return (
    <div className="Home">
      <h1>Home Page</h1>
      {cartItems.map((item: any) => {
        return <h2>{item.name}</h2>
      })}
    </div>
  );
}

export default Home;
