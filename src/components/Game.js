import React, { Component } from 'react';

import ButtonGame from './ButtonGame';
import Stars from './Stars';
import Answer from './Answer';
import Numbers from './Numbers';
class Game extends React.Component {
   
    render(){
    return(
      <div className="container">
          <br/>
          <h3 className="text-center">Play Nine</h3>
          <hr/>
          <div className="row">
          <Stars/>          
          <ButtonGame/>
          <Answer/>
          <br/><br/>
          <Numbers/>
          </div>
        
      </div>
     );
    }
};

export default Game;
