import React, { Component } from 'react';
import Card from './Card';


const CardList = (props) => {
    return(
        <div>
            {props.data.map(card => <Card key={card.id} {...card }/>)}
        </div>
    );
};

export default CardList;
