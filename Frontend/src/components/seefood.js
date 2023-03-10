import React, { useEffect, useState } from "react";
import axios from "axios";



function Seefood() {

    const [foods, setfood] =useState({
      foodname: "",
      ishot: "",

    });
    const getFood = async() => {
        axios.get('/allfood')
        .then((response) => {
            console.log(response)
            console.log(response.data)
            console.log(response.data.foodname)
            console.log(response.data.ishot)
            
            setfood({...foods, 
                foodname: response.data.foodname,
                ishot: response.data.ishot,
              
            })
        }
        )
        
        console.log(foods)
        console.log(foods.foodname)
        console.log(foods.ishot)

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