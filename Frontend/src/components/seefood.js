import React, { useEffect, useState } from "react";
import axios from "axios";



function Seefood() {

    const [foods, setfood] =useState([]);

    const getFood = async() => {
       await axios.get('/allfood')
        .then((response) => {
            
            console.log(response.data)
            //setting variables for the foodname
            const foodData = response.data
            console.log(response.data[0].ishot)
            setfood(foodData)
            
                                
                        
           

            return foods
          }
        )
    }

    useEffect(() => {
            
        console.log('get food will begin')
        getFood()
          
       
            }, []);

    
    return(
        <>
        <div className="sectionheader">
            <h1>Here is all of your food</h1>
        
        </div>
        <div id="allfooditems">
            {foods.map((food, i) => (

                <p key={i}> {food.foodname} <button>Delete</button> </p>
            ))


            }
        </div>
          
        </>

    )
}

export default Seefood;




 