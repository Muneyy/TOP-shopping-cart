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

const Card = ({name, cost, sprite, desc, setCartCount, cartCount, setCartItems, item}: {
        name: string,
        cost: number,
        sprite: string,
        desc: string,
        setCartCount?: React.Dispatch<React.SetStateAction<number>>,
        cartCount?: number,
        setCartItems?: React.Dispatch<React.SetStateAction<object[]>>,
        item?: object
    }) => {

    function toTitleCase(str: string) {
        return str.replace(
            /\w\S*/g,
            function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }

    const useName = toTitleCase(name.replace(/-/g, ' '))

    function setStatesOnClick () {
        setCartCount(cartCount + 1);
        setCartItems(arr => {
            console.log(arr)
            return [...arr, item]
        });
    }

    

    return (
        <div className='card'>
            <h1>{useName}</h1>
            <h2>&#36;{cost}</h2>
            <img src={sprite}/>
            <h3>{desc}</h3>
            <button 
                className='add-to-cart' 
                onClick={() => setStatesOnClick()}>
                Add to Cart
            </button>
        </div>
    )
}

export default Card;