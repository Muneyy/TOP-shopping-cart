
import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';
import '../App.css';
import '../Styles/card.css'
import { Link } from 'react-router-dom';
import { stringify } from 'querystring';
import uniqid from 'uniqid';
import Card from './Card';


const Shop = ({items, load, setCartCount, cartCount, setCartItems} : {
  items: object[],
  load: boolean,
  setCartCount: React.Dispatch<React.SetStateAction<number>>,
  cartCount: number
  setCartItems: React.Dispatch<React.SetStateAction<object[]>>
  }) => {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log(items);
    if (items.length === 14) {
      setLoaded(true);
    }
  }, [items])


  return (
      (loaded) ? 
      <div className="Shop">
        <h1>Shop Page</h1>
        <div className="card-container">
          {items.map((item: any) => (
            <div className='card-above' key={uniqid()}>
              <Card
              name={item.name}
              cost={item.cost}
              sprite={item.sprite}
              desc={item.desc}
              setCartCount={setCartCount}
              cartCount={cartCount}
              setCartItems = {setCartItems}
              item = {item}
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
