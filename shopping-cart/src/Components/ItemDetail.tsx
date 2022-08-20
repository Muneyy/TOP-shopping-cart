import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';
import '../App.css';
import Card from './Card';
import { useLocation } from 'react-router-dom';


const ItemDetail = () => {

    const [displayItem, setDisplayItem] = useState<any>({});

    useEffect(() => {
        fetchItem(getName)
    }, [])
    
    
    const location = useLocation()
    const locationPath = location.pathname
    const getName = locationPath.substring(locationPath.lastIndexOf('/') + 1)
    
    const fetchItem = async (getName: string) => {
        const response = await fetch(`https://pokeapi.co/api/v2/item/${getName}/`);
        const item = await response.json();
        setDisplayItem(item);
    }

    return (
        (displayItem) ?
        <div className="ItemDetail">
            <h1>{displayItem.name}</h1>
            <p>{displayItem.cost}</p>
        </div>
        :
        <h1>Loading...</h1>
    );
}

export default ItemDetail;