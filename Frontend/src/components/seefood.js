import React, { useEffect, useState } from "react";



function Seefood() {

    const [foods, setfood] =useState({
      foodname: "",
      ishot: "",

    });

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
                foods.map(foods =>(
                    <div> 
                        <h1>{foods.foodname}</h1>
                            <p>{foods.ishot}</p>
                    </div>


                ))
            }
        </div>

          
        </>

    )
}

export default Seefood;