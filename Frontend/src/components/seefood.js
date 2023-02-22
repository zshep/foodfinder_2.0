import React, { useEffect, useState } from "react";
import axios from "axios";



function Seefood() {

    const [foods, setfood] =useState({
      foodname: "",
      ishot: "",

    });

    useEffect(() => {
        axios.get('/allfood')
            .then((response) => {
                console.log(response.data)
                console.log(response.json())
                setfood({
                    foodname: response.data.food,
                    ishot: response.data.ishot,

                })
                console.log(foods)
            }
            )

            }, []);

    
    return(
        <>
        <div className="sectionheader">
            <h1>Here is all of your food</h1>
        
        </div>
        <p>
            
          {/*   {foods.map(
                { foodname, ishot} =>
                <h1>{foodname}</h1>
                <p>{ishot}</p>
                </>
            )} */}


              
        </p>

          
        </>

    )
}

export default Seefood;