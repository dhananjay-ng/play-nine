import React, { Component } from 'react';

class Button extends React.Component{
    handleClick=()=>{
     this.props.onClickFunction(this.props.increment);
    };

    render(){
        return (
            <div className="Button">
              <button onClick={this.handleClick}>+{this.props.increment}</button>
            </div>
          );
    }   
  }


export default Button;
