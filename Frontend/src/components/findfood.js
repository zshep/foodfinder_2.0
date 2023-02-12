import React, { useState, useEffect} from "react";



function Findfood () {

  //using use state to create JS object
  const [fooddata, setfooddata] = useState({
    foodname: "",
    ishot: "",
  });


  //using use effect to grab data
  useEffect(() =>{
    //using fetch to grab from flask server
    fetch('/food').then((res) =>
    res.json().then((data) =>{
      setfooddata({
        foodname: data.foodname,
        ishot: data.ishot,
      });


    })
    );

  }, []); // no idea what [] is supposed to be used for


    return(
        <>
        <div className="sectionheader">
            <h1>What should we have for dinner?</h1>
        
        </div>

                <div className="fooditem">
                  <p>{fooddata.foodname}</p>
                </div>




          <div className="button">
            
            <button id="addbtn">Find a food</button>
          </div>
        </>

    )


}

export default Findfood;