// 👇️ ts-nocheck disables type checking for entire file
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// 👇️ ts-ignore ignores any ts errors on the next line
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';
import '../App.css';
import '../Styles/card.css'
import { Link } from 'react-router-dom';
import { stringify } from 'querystring';
import uniqid from 'uniqid';
import Card from './Card';


const Shop = () => {

  const inputList: string[] = [
    "potion", 'super-potion', 'hyper-potion',
    "poke-ball", "great-ball", "ultra-ball",
  ];

  const [items, setItems] = useState<object[]>([]);
  const [load, setLoad] = useState(false);

  type itemObject = {
    name: string,
    cost: number,
    sprite: string,
    desc: string,
    value?: string
  }

  const fetchItem = async (item: string, array: object[]) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/item/${item}/`);
      const object = await response.json();
      const name: string = object.name;
      const cost: number = object.cost;
      const sprite: string = object.sprites.default;
      const desc: string = object.effect_entries[0].effect;
      const obj: itemObject = {
        name: name,
        cost: cost,
        sprite: sprite,
        desc: desc
      };
      array.push(obj);
      setItems(array);
    } catch (error) {
      throw new Error();
    }
  }

  useEffect(() => {
    const newArray: object[]= ([]);
    async function getItemList(itemList: string[]) {
      for (const item of itemList) {
        fetchItem(item, newArray).catch(console.error);
      }
      console.log("Huh?")
    }
    Promise.all(getItemList(inputList))
    .then(setLoad(true));
  }, []);


  return (
    (load) ? 
    <div className="Shop">
      <h1>Shop page</h1>
      <div className="card-container">
        {items.map((item: itemObject) => (
          <div className='card-above' key={uniqid()}>
            <Card
            name={item.name}
            cost={item.cost}
            sprite={item.sprite}
            desc={item.desc}
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
