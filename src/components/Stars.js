import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Stars = (props) => {
    let stars = [];
    for(let i=0 ; i< props.numnberOfStars; i++){
        stars.push(<FontAwesomeIcon key={i} icon="star"/>);
    }
    return(
        <div className="col-5">
          {stars}
        </div>

    );

};

export default Stars;