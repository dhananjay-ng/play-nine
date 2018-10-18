import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Result from './components/Result';
import CardList from './components/CardList';

class App extends Component {
  
  state = { counter : 0 };

  incrementCounter=(increment)=>{
    this.setState((prevState) => ({
        counter : prevState.counter + increment
    }));
};
  render() {
    return (
      <div className="App">      
        <Button increment={1} onClickFunction={this.incrementCounter} />
        <Button increment={10} onClickFunction={this.incrementCounter} />
        <Button increment={100} onClickFunction={this.incrementCounter} />
        <Button increment={1000} onClickFunction={this.incrementCounter} />
        <Result counter={this.state.counter} />
        <CardList/>
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
