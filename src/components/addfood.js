import React from "react";


function Addfood() {



    return(
        <>
        <h1>Add a New Food</h1>
      

    </div>

    <form class="foodForm">
        <div>
            <label for="foodname">Add food here</label>
            <input type="text" id="newFood" name="foodname"></input>
            <br>
            <label for="ishot">Is this food hot?</label>
            <input type='checkbox' id="isHot" name="ishot"></input>

        </div>
    </form>

        <div class="button">
            <button id="submitbtn">Add Food</button>
            <button id="pickbtn">Pick Food</button>
            
        </>



    )
}

