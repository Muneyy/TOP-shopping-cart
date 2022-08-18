import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';
import '../Styles/card.css';
import { Link } from 'react-router-dom';
import { stringify } from 'querystring';
import uniqid from 'uniqid';

const Card = ({name, cost, sprite, desc}: {
        name: string,
        cost: number,
        sprite: string,
        desc: string
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

    return (
        <div className='card'>
            <h1>{useName}</h1>
            <h2>&#36;{cost}</h2>
            <img src={sprite}/>
            <h3>{desc}</h3>
            <button className='add-to-card'>Add to Cart</button>
        </div>
    )
}

export default Card;