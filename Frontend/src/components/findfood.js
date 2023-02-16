import React, { useState, useEffect} from "react";



function Findfood () {
  
  //using use state to create JS object
  const [data, setfooddata] = useState({
    foodname: "",
    ishot: "",
  });

  //using use effect to grab data
  useEffect(() =>{
    //using fetch to grab from flask server
    fetch('/food').then(
      (res) =>res.json()
      .then(
          (data) =>
          {
          console.log(data);
          setfooddata(data);
    })
    );
  
  }, []); 


  const clickFindFood = () => {
    console.log('the find food btn was clicked');
    fetch('/food')
    .then((res) => {
      const data =  res.json();
      return data
      
    })
    .then((data) => {
      const foodput = document.querySelector("#givenfooditem")
      
      console.log('the food is...', data.food)      
      foodput.innerHTML = data.food;
      
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
                  <p>{data.foodname}</p>
                </div>

          <div className="button">
            
            <button id="addbtn" onClick={clickFindFood}>Find a food</button>
          </div>
        </>

    )


}

export default Findfood;