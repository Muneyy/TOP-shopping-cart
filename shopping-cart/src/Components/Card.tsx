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

const Card = ({item, setCartCount, cartCount, setCartItems, setCurrentCost, cardForShop}: {
    item: object,
    setCartCount?: React.Dispatch<React.SetStateAction<number>>,
    cartCount?: number,
    setCartItems?: React.Dispatch<React.SetStateAction<object[]>>,
    setCurrentCost?: React.Dispatch<React.SetStateAction<number>>,
    cardForShop: boolean
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

    function updateStatesOnRemove (id, cost) {
        setCartCount(count => count - 1);
        setCurrentCost(prevCost => prevCost - cost);
        setCartItems(arr => {
            const newArray = arr.filter(item => {
                if (item.id !== id) {
                    return item
                }
            });
            return [...newArray];
        });
    }

    return (
        (cardForShop) ?
        <Link to={`/TOP-shopping-cart/Shop/${item.name}`}>
            <div className='card'>
                <div className="name-cost">
                    <h1>{useName}</h1>
                    <h2>&#36;{item.cost}</h2>
                </div>
                <img src={item.sprite}/>
            </div>
        </Link>
        :
        <div className='card-cart'>
            <img src={item.sprite}/>
            <h1>{useName}</h1>
            <h2>&#36;{item.cost}</h2>
            <button onClick={() => updateStatesOnRemove(item.id, item.cost)}>Remove Item</button>
        </div>
    )
}

export default Card;