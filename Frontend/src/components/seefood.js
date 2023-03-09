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
                console.log(response)
                console.log(response.data)
                
                setfood({
                    foodname: response.data,
                    ishot: response.data.ishot,

                })
                console.log(foods)
                console.log(response.data)
            }
            )

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