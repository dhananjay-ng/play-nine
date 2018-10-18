import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ButtonGame = (props) => {
    let button;
     switch(props.answerIsCorrect) {
  	case true:
    	button = <button className="btn btn-success" onClick={props.acceptAnswer}>
                    <FontAwesomeIcon icon="check"/>        </button>;      
      break;
  	case false:
    	button =
        <button className="btn btn-danger">
                <FontAwesomeIcon icon="times"/>        </button>;      
      break;
  	default:
    	button =
        <button className="btn" 
        				onClick={props.checkAnswer}
        				disabled={props.selectedNumbers.length === 0}>
          =
        </button>;      
      break;
  }
    return(
        <div className="col-2 text-center">
        {button}
        <br /><br />
        <button className="btn btn-warning btn-sm" onClick={props.redraw}
                disabled={props.redraws === 0}>
           <FontAwesomeIcon icon="redo"/><br />
           {props.redraws}
        </button>
        <br />
        <br />
      </div>
    );

};

export default ButtonGame;