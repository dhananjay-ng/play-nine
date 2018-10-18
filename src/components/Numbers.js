import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Numbers = (props) => {
    return(      
        <div className="card text-center col-12">
         <div>
             { Numbers.arrayOfNumbers.map((number,i)=>
                      <span key={i}>{number}</span>
                )}
         </div>
        </div>

    );

};
Numbers.arrayOfNumbers=[1,2,3,4,5,6,7,8,9];
export default Numbers;