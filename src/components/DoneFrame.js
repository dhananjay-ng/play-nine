import React, { Component } from 'react';

const DoneFrame = (props) => {
    return (
      <div className="col-12 text-center">
        <h2>{props.doneStatus}</h2>
        <button className="btn btn-secondary" onClick={props.resetGame}>
        Play Again
      </button>
      </div>
    );
  };
  export default DoneFrame;