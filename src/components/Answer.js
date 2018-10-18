import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/free-solid-svg-icons'

const Answer = (props) => {
    return(
       
        <div className="col-3">
        { props.selectedNumbers.map((number,i ) =>
            <span key={i} onClick={()=>{props.unselectNumber(number)}}>{number}</span>
        )
        }
        </div>

    );

};

export default Answer;