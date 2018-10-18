import React, { Component } from 'react';

const Timer = (props) => {
   

    return (
      <div className="col-2 text-center">
        <button className="btn btn-secondary">
        {props.timeLeft}
       </button>
      </div>
    );
  };
  export default Timer;