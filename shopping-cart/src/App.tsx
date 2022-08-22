
import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Nav from './Components/Nav';
import { NamedDeclaration } from 'typescript';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemDetail from './Components/ItemDetail';

const App = () => {
  const inputList: string[] = [
    "potion", 'super-potion', 'hyper-potion',
    "poke-ball", "great-ball", "ultra-ball",
    "antidote", "full-heal", "full-restore",
    "max-potion", "max-ether", "max-elixir",
    "max-repel", "max-revive", "escape-rope",
    "ice-heal", "burn-heal", "awakening"
  ];

  const [items, setItems] = useState<object[]>([]);
  const [load, setLoad] = useState<boolean>(false);
  const [cartCount, setCartCount] = useState<number>(0);
  const [cartItems, setCartItems] = useState<object[]>([]);
  const [currentCost, setCurrentCost] = useState<number>(0);

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
      // for (const item of itemList) {
      //   fetchItem(item, newArray).catch(console.error);
      // }
      Promise.all(itemList.map(item => {
        fetchItem(item, newArray).catch(console.error);
      }))
      await setLoad(true);
    }
    getItemList(inputList);
  }, []);

  return (
    <Router>
      <div className='App'>
        <Nav cartCount={cartCount} currentCost={currentCost} />
        <Routes>
        <Route 
            path="/" element={
              <Home cartItems={cartItems}
                    currentCost={currentCost}
                    setCartItems = {setCartItems}
                    setCartCount = {setCartCount}
                    setCurrentCost = {setCurrentCost}
              />} 
          />
          <Route 
            path="/TOP-shopping-cart/Home" element={
              <Home cartItems={cartItems}
                    currentCost={currentCost}
                    setCartItems = {setCartItems}
                    setCartCount = {setCartCount}
                    setCurrentCost = {setCurrentCost}
              />} 
          />
          <Route 
            path="/TOP-shopping-cart/Shop" element={
              <Shop items={items} 
                    load={load} 
                    setCartCount ={setCartCount} 
                    cartCount={cartCount} 
                    setCartItems={setCartItems}
                    setCurrentCost = {setCurrentCost}
              />}
          />
          <Route 
              path="/TOP-shopping-cart/Shop/:name"
              element = {
                <ItemDetail
                  setCartCount={setCartCount}
                  setCartItems={setCartItems}
                  setCurrentCost = {setCurrentCost}
                />
              }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
