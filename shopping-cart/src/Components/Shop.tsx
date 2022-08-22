
import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';
import '../App.css';
import '../Styles/card.css'
import { Link } from 'react-router-dom';
import { stringify } from 'querystring';
import uniqid from 'uniqid';
import Card from './Card';


const Shop = ({items, load, setCartCount, cartCount, setCartItems, setCurrentCost} : {
  items: object[],
  load: boolean,
  setCartCount: React.Dispatch<React.SetStateAction<number>>,
  cartCount: number,
  setCartItems: React.Dispatch<React.SetStateAction<object[]>>,
  setCurrentCost: React.Dispatch<React.SetStateAction<number>>
  }) => {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (load) {
      setLoaded(true);
    }
  }, [load]);


  return (
      (load) ? 
      <div className="Shop">
        <h1>Mart</h1>
        <div className="card-container">
          {items.map((item: any) => (
            <div className='card-above' key={uniqid()}>
              <Card
              item = {item}
              setCartCount={setCartCount}
              cartCount={cartCount}
              setCartItems = {setCartItems}
              setCurrentCost = {setCurrentCost}
              cardForShop = {true}
              />
            </div>
          ))}
        </div>
      </div>
       :
      <div className="Shop">
        <h1>Loading...</h1>
      </div>

  );
}

export default Shop;
