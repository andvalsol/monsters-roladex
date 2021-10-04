import React from "react";
import './card.styles.css'

export const Card = (props) => (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.item.id}?set=set=2&size=180x180`}/>
        <h1>{props.item.name}</h1>
        <h2>{props.item.email}</h2>
    </div>
)
