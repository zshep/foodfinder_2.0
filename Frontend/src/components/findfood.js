import React from "react";
import axios from 'axios';


function Findfood () {
  

  const clickFindFood = () => {
    console.log('the find food btn was clicked');
    axios.get('/food')
    .then((response) => {

      
      console.log(response.data)
      
      const foodnameData = response.data.foodname;

      const foodput = document.querySelector("#givenfooditem")
      
      console.log('the food is...', foodnameData)
         
      foodput.innerHTML = foodnameData;
      
    })
    
    .catch((error) => {
      console.error('The fetch operation fucked up', error);
    });
  }

  
  return(
    <>
        <div className="sectionheader">
            <h1>What should we have for dinner?</h1>
        
        </div>

                <div className="fooditem" id="givenfooditem">
                  <p></p>
                </div>

          <div className="button">
            
            <button id="addbtn" onClick={clickFindFood}>Find a food</button>
          </div>
        </>

    )


}

export default Findfood;