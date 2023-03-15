import React, { useEffect, useState } from "react";
import axios from "axios";



function Seefood() {

    const [foods, setfood] =useState({
        foodname: "",
        ishot: ""
  
      });

    const getFood = async() => {
       await axios.get('/allfood')
        .then((response) => {
            
            //setting variables for the foodname
            const fooddata_name = response.data.foodname
            const fooddata_ishot = response.data.ishot
           

            if (fooddata_ishot) {
                setfood({
                    foodname: fooddata_name,
                    ishot: 'Yes'
                })

            } else {
                setfood({
                    foodname: fooddata_name,
                    ishot: 'No'
                })

            }

            console.log(response.data)
            console.log(fooddata_name)
            console.log(fooddata_ishot)
            
                        
           

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
            <p>         
                 Food: {foods.foodname} 

            </p>
            <p>
                Is it hot? {foods.ishot}
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