import React from "react";


function Addfood() {



    return (
        <>
        <div className="sectionheader">
            <h1>What food what would you like to add?</h1>
        
        </div>
            <form className="foodForm">
                <div>
                    <label for="foodname">Add food here</label>
                    <input type="text" id="newFood" name="foodname"></input>
                    
                        <label for="ishot">Is this food hot?</label>
                        <input type='checkbox' id="isHot" name="ishot"></input>

                </div>
            </form>
            <div className="addbtn">
            <button>Add food</button>
            </div>
        </>

    )
}


export default Addfood;
