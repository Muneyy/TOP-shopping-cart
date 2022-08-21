import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';
import '../App.css';
import Card from './Card';
import { useLocation } from 'react-router-dom';
import '../Styles/itemDetail.css'
import uniqid from 'uniqid';


const ItemDetail = ({setCartCount, setCartItems, setCurrentCost} : {
    setCartCount: React.Dispatch<React.SetStateAction<number>>,
    setCartItems: React.Dispatch<React.SetStateAction<object[]>>,
    setCurrentCost: React.Dispatch<React.SetStateAction<number>>
}) => {

    const [displayItem, setDisplayItem] = useState<any>({});

    useEffect(() => {
        fetchItem(getName)
    }, [])
    
    
    const location = useLocation()
    const locationPath = location.pathname
    const getName = locationPath.substring(locationPath.lastIndexOf('/') + 1)
    
    const fetchItem = async (item: string) => {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/item/${item}/`);
          const object = await response.json();
          const name: string = object.names[7].name;
          const category: string = object.category.name;
          const cost: number = object.cost;
          const sprite: string = object.sprites.default;
          const desc: string = object.effect_entries[0].effect;
          const engText : string = object.flavor_text_entries[3].text;
          const japText: string = object.flavor_text_entries[9].text;
          const korText: string = object.flavor_text_entries[10].text
          const obj = {
            name,
            category,
            cost,
            sprite,
            desc,
            eng: engText,
            jap: japText,
            kor: korText,
            id: uniqid()
          };
          setDisplayItem(obj);
          console.log(object)
        } catch (error) {
          throw new Error();
        }
      }

    function setStatesOnClick () {
        setCartCount(prevCount => prevCount + 1);
        setCurrentCost(currentCost => currentCost + displayItem.cost);
        const newObject = {
            id : uniqid()
        }
        setDisplayItem((prevItem: object) => ({
            ...prevItem,
            ...newObject
        }))
        setCartItems(arr => {
            console.log(arr);
            return [...arr, displayItem]
        });
    }

    return (
        (displayItem) ?
        <div className="ItemDetail">
            <div className="header">
                <div className="header-left">
                    <h1>{displayItem.name}</h1>
                    <p>{displayItem.category}</p>
                </div>
                <div className="header-right">
                    <h2>&#36;{displayItem.cost}</h2>
                </div>
            </div>
            <h3>{displayItem.desc}</h3>
            <p>{displayItem.eng}</p>
            <p>{displayItem.jap}</p>
            <p>{displayItem.kor}</p>
            <img src={displayItem.sprite}/>
            <button
                onClick={() => setStatesOnClick()}>
                Add to Cart
            </button>
        </div>
        :
        <h1>Loading...</h1>
    );
}

export default ItemDetail;