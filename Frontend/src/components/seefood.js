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
            
            setfood(foodData)
            
                                
                        
           

            return foods
          }
        )
    }

    useEffect(() => {
            
        console.log('get food will begin')
        getFood()
          
       
            }, []);

    
    const clickDeletefood = async (foodname) => {
        
                   
        console.log(`${foodname} delete button was pushed`)
        
        
        //route call to backend to delete food
         const response = await axios.delete(`/deletefood/${foodname}`)
        
         .then((response) => {
         
            console.log(response);
            console.log(response.status);
            
            return
        })    
        
        window.location.reload()
        return response
    }


    return(
        <>
        <div className="sectionheader">
            <h1>Here is all of your food</h1>
        
        </div>
        <div id="allfooditems">
            {foods.map((food, i) => (
                <div id='singlefooditem'>
                    <p key={i} id={food.foodname}> {food.foodname}</p> 
                    <button onClick={e => clickDeletefood(food.foodname)} className ="deletebtn">Delete</button>
                </div>
            ))

            }
        </div>
          
        </>

    )
}

export default Seefood;




 