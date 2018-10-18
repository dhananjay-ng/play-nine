import React, { Component } from 'react';
import axios from 'axios';
class Form extends React.Component {
    state = {
        userName :''
    }
    handleSubmit =(event)=>{
        event.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.userName}`)
        .then(resp=> this.props.onSubmit(resp.data));
        this.setState({userName: ''});
    };
    render(){
    return(
       <form onSubmit={this.handleSubmit}>
           <input type="text" 
           value={this.state.userName} 
           onChange={(event)=>this.setState({userName:event.target.value})} 
           placeholder="GitHub Username"/>

           <button type="submit">Add Card</button>
       </form>
     );
    }
};

export default Form;
