import React from "react";
import axios from 'axios';


function Findfood () {
  

  const clickFindFood = () => {
    console.log('the find food btn was clicked');
    axios.get('/food')
    .then((response) => {

      const foodData = response.data;

      const foodput = document.querySelector("#givenfooditem")
      
      console.log('the food is...', foodData.food);
         
      foodput.innerHTML = foodData.food;
      
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