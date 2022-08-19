// 👇️ ts-nocheck disables type checking for entire file
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// 👇️ ts-ignore ignores any ts errors on the next line
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';
import '../Styles/card.css';
import { Link } from 'react-router-dom';
import { stringify } from 'querystring';
import uniqid from 'uniqid';

const Card = ({item, setCartCount, cartCount, setCartItems, setCurrentCost}: {
    item: object,
    setCartCount?: React.Dispatch<React.SetStateAction<number>>,
    cartCount?: number,
    setCartItems?: React.Dispatch<React.SetStateAction<object[]>>,
    setCurrentCost?: React.Dispatch<React.SetStateAction<number>>
    }) => {

    function toTitleCase(str: string) {
        return str.replace(
            /\w\S*/g,
            function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }
    const fixName = item.name
    const useName = toTitleCase(fixName.replace(/-/g, ' '))

    function setStatesOnClick () {
        setCartCount(cartCount + 1);
        setCurrentCost(currentCost => currentCost + item.cost)
        setCartItems(arr => {
            console.log(arr)
            return [...arr, item]
        });
    }

    return (
        (setCartCount) ?
        <div className='card'>
            <h1>{useName}</h1>
            <h2>&#36;{item.cost}</h2>
            <img src={item.sprite}/>
            <h3>{item.desc}</h3>
            <button 
                className='add-to-cart' 
                onClick={() => setStatesOnClick()}>
                Add to Cart
            </button>
        </div>
        :
        <div className='card-cart'>
            <img src={item.sprite}/>
            <h1>{item.name}</h1>
            <h2>&#36;{item.cost}</h2>
        </div>
    )
}

export default Card;