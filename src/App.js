import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Result from './components/Result';
import CardList from './components/CardList';
import Form from './components/Form';

class App extends Component {
  
  state = { counter : 0 ,
            cards : []
          };

  incrementCounter=(increment)=>{
    this.setState((prevState) => ({
        counter : prevState.counter + increment
    }));
};
addNewCard = (cardInfo)=>{
   this.setState( prevState=>({
     cards : prevState.cards.concat(cardInfo)
   }));
}
  render() {
    return (
      <div className="App">      
        <Button increment={1} onClickFunction={this.incrementCounter} />
        <Button increment={10} onClickFunction={this.incrementCounter} />
        <Button increment={100} onClickFunction={this.incrementCounter} />
        <Button increment={1000} onClickFunction={this.incrementCounter} />
        <Result counter={this.state.counter} />
     
        <Form onSubmit={this.addNewCard}/>
        <CardList data={this.state.cards}/>
      {/*   <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit file <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
