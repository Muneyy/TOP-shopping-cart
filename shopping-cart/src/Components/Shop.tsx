import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState, Suspense } from 'react';
import '../App.css';
import '../Styles/card.css'
import { Link } from 'react-router-dom';
import { stringify } from 'querystring';
import uniqid from 'uniqid';
import Card from './Card';

const inputList: string[] = [
  "potion", 'super-potion', 'hyper-potion',
  "poke-ball", "great-ball", "ultra-ball",
  "antidote", "full-heal", "full-restore",
  "max-potion", "max-ether", "max-elixir",
  "max-repel", "max-revive", "escape-rope",
  "ice-heal", "burn-heal", "awakening"
];

type itemObject = {
  name: string,
  cost: number,
  sprite: string,
  desc: string,
  value?: string
}

const fetchItem = async (item: string) => {
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
    return obj
  } catch (error) {
    throw new Error();
  }
}
 
async function getItemList(itemList: string[]) {
  const toReturn = Promise.all(itemList.map(item => {
    const fetchedObject = fetchItem(item)
    return fetchedObject
  })).then(list => {return list})
  return toReturn
}

const promise = getItemList(inputList);

const Shop = ({items, load, setCartCount, cartCount, setCartItems, setCurrentCost} : {
  items: object[],
  load: boolean,
  setCartCount: React.Dispatch<React.SetStateAction<number>>,
  cartCount: number,
  setCartItems: React.Dispatch<React.SetStateAction<object[]>>,
  setCurrentCost: React.Dispatch<React.SetStateAction<number>>
  }) => {

  const [loaded, setLoaded] = useState(false);
  const [list, setList] = useState<object[]>([]);



  useEffect(() => {
    promise.then(list => {
      setList([...list]);
      setLoaded(true);
    });
  }, []);

  // if (!loaded) {
  //   return (
  //     <h1>Loading...</h1>
  //   )
  // }
  return (
    (loaded) ?
      <div className="Shop">
        <h1>Mart</h1>
          <div className="card-container">
            {list.map((item: any) => (
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
      <h1>Loading...</h1>
  );
}

export default Shop;
