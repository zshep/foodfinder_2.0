import React, { useEffect, useState } from "react";
import axios from "axios";



function Seefood() {

    const [foods, setfood] =useState({
      foodname: "",
      ishot: "",

    });
    const getFood = async() => {
       await axios.get('/allfood')
        .then((response) => {
            
            console.log(response.data)
            console.log(response.data.foodname)
            console.log(response.data.ishot)
        
            setfood({...foods, 
                foodname: response.data.foodname,
                ishot: response.data.ishot,
            })

        }
        )
        
        

    }


    useEffect(() => {
            
        console.log('get food will begin')
        getFood()
        console.log('attempting to set the state of food')
        
        console.log(foods)
        console.log('the foodname is...', foods.foodname)
        console.log('is the food hot?', foods.ishot)

            }, []);

    
    return(
        <>
        <div className="sectionheader">
            <h1>Here is all of your food</h1>
        
        </div>
        <div id="allfooditems">
            <p>                  
            </p>
        </div>
          
        </>

    )
}

export default Seefood;




 /*   {foods.map(
                { foodname, ishot} =>
                <h1>{foodname}</h1>
                <p>{ishot}</p>
                </>
            )} */