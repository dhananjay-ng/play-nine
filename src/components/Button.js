import React, { Component } from 'react';

class Button extends React.Component{
    handleClick=()=>{
     this.props.onClickFunction(this.props.increment);
    };

    render(){
        return (
              <button onClick={this.handleClick}>+{this.props.increment}</button>
          );
    }   
  }


export default Button;
