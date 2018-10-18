import React, { Component } from 'react';

import ButtonGame from './ButtonGame';
import Stars from './Stars';
import Answer from './Answer';
import Numbers from './Numbers';
import DoneFrame from './DoneFrame';
class Game extends React.Component {
   static randomNumberGen=() => 1 + Math.floor(Math.random()*9);
   static initialState = () => ({
    selectedNumbers: [],
    randomNumberOfStars: Game.randomNumberGen(),
    usedNumbers: [],
    answerIsCorrect: null,
    redraws: 5,
    doneStatus: null,
    timeLeft:60
  });
  state = Game.initialState();
  resetGame = () => this.setState(Game.initialState());


   selectNumber = (clickedNumber) => { 
    if(this.state.selectedNumbers.indexOf(clickedNumber)<0 && 
         this.state.usedNumbers.indexOf(clickedNumber)<0 ){
        this.setState(prevState=>({
            answerIsCorrect: null,
            selectedNumbers : prevState.selectedNumbers.concat(clickedNumber)
        }));
    }
   };
   unselectNumber = (clickedNumber) => {
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers
                                .filter(number => number !== clickedNumber)
    }));
    }
    checkAnswer = () => {
        this.setState(prevState => ({
          answerIsCorrect: prevState.numnberOfStars ===
            prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
      }));
    };

    acceptAnswer = () => {
        this.setState(prevState => ({
           usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
          selectedNumbers: [],
          answerIsCorrect: null,
          numnberOfStars: Game.randomNumberGen(),
        }), this.updateDoneStatus);
    };

    redraw = () => {
        if (this.state.redraws === 0) { return; }
        this.setState(prevState => ({
            numnberOfStars: Game.randomNumberGen(),
          answerIsCorrect: null,
          selectedNumbers: [],
          redraws: prevState.redraws - 1,
        }), this.updateDoneStatus);
      };
      updateDoneStatus = () => {
        this.setState(prevState => {
          if (prevState.usedNumbers.length === 9) {
            return { doneStatus: 'Done. Nice!' };
          }
          if (prevState.redraws === 0 && !this.possibleSolutions(prevState)) {
            return { doneStatus: 'Game Over!' };
          }
        });
      };
      possibleSolutions = ({numnberOfStars, usedNumbers}) => {
        const possibleNumbers = [1,2,3,4,5,6,7,8,9].filter(number =>
          usedNumbers.indexOf(number) === -1
        );
    
        return this.possibleCombinationSum(possibleNumbers, numnberOfStars);
      };
      possibleCombinationSum = function possibleCombinationSum (arr, n) {
        if (arr.indexOf(n) >= 0) { return true; }
        if (arr[0] > n) { return false; }
        if (arr[arr.length - 1] > n) {
          arr.pop();
          return possibleCombinationSum(arr, n);
        }
        var listSize = arr.length, combinationsCount = (1 << listSize);
        for (var i = 1; i < combinationsCount ; i++ ) {
          var combinationSum = 0;
          for (var j=0 ; j < listSize ; j++) {
            if (i & (1 << j)) { combinationSum += arr[j]; }
          }
          if (n === combinationSum) { return true; }
        }
        return false;
      };
      
    render(){
        const { selectedNumbers, numnberOfStars,answerIsCorrect,usedNumbers ,redraws, doneStatus,timeLeft

 } = this.state;

    return(
      <div className="container">
          <br/>
          <h3 className="text-center">Play Nine</h3>
          <hr/>
          <div className="row">
          <Stars numnberOfStars={numnberOfStars}/>          
          <ButtonGame selectedNumbers={selectedNumbers} checkAnswer={this.checkAnswer}
                  answerIsCorrect={answerIsCorrect} acceptAnswer={this.acceptAnswer} redraw={this.redraw}  redraws={redraws}
                  />
          <Answer selectedNumbers={selectedNumbers} unselectNumber={this.unselectNumber}/>
          <br/><br/>
          {doneStatus ? <DoneFrame resetGame={this.resetGame} doneStatus={doneStatus} /> :
          <Numbers selectNumber={this.selectNumber} selectedNumbers={selectedNumbers} usedNumbers={usedNumbers}/>
     } </div>
      
      </div>
     );
    }
};

export default Game;
