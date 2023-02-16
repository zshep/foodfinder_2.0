import React, { useEffect, useState } from "react";



function Seefood() {

    const [foods, setfood] =useState([]);

    useEffect(() => {
        fetch("/allfood").then(
            (res) =>res.json()
            .then(
                (data) =>
                {
                    console.log(data);
                    setfood(data);

                })

            )

            }, []);

    


    return(
        <>
        <div className="sectionheader">
            <h1>Here is all of your food</h1>
        
        </div>
        <div className="fooditem">
            {
                foods.map(food =>(
                    <div> 
                        <h1>{food.foodname}</h1>
                            <p>{food.ishot}</p>
                    </div>


                ))
            }
        </div>

          
        </>

    )
}

export default Seefood;