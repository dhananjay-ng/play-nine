import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Stars = (props) => {
    const numnberOfStars= 1 + Math.floor(Math.random()*9);
    let stars = [];
    for(let i=0 ; i< numnberOfStars; i++){
        stars.push(<FontAwesomeIcon icon="star"/>);
    }
    return(
        <div className="col-5">
          {stars}
        </div>

    );

};

export default Stars;