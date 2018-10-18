import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Numbers = (props) => {
    
   const getClassNameAsPerState=(number)=>{
       if(props.usedNumbers.indexOf(number)>=0 ){
           return 'used';
       }
        return props.selectedNumbers.indexOf(number)>=0 ?'selected':'';
    };
   

    return(      
        <div className="card text-center col-12">
         <div>
             { Numbers.arrayOfNumbers.map((number,i)=>
                      <span key={i} 
                            className={getClassNameAsPerState(number) } 
                            onClick={()=>props.selectNumber(number)}> {number} </span>
                )}
         </div>
        </div>

    );

};
Numbers.arrayOfNumbers=[1,2,3,4,5,6,7,8,9];
export default Numbers;