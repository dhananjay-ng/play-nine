import React, { Component } from 'react';

const Card = (props) => {
    return(
        <div style={{margin: '1em'}}>
            <img srd="http://placehold.it/75"></img>
            <div style={{display: 'inline-block', marginLeft: 10}}>
                Name Here ..
            </div>
            <div>
                Company Name Here ....
            </div>
        </div>
     );
};

export default Card;
