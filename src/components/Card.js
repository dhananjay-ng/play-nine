import React, { Component } from 'react';

const Card = (props) => {
    return(
        <div style={{margin: '1em'}}>
            <img width="75" src="http://placehold.it/75"/>
            <div style={{display: 'inline-block', marginLeft: 10}}>
            <div >
                Name Here ..
            </div>
            <div>
                Company Name Here ....
            </div>
            </div>
        </div>
     );
};

export default Card;
