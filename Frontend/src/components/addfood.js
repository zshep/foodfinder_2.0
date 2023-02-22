import React  from "react";
import axios from "axios";
const foodItem = document.querySelector('#newFood');
const checkbox = document.querySelector('#isHot');

function Addfood() {
       

      const clickAddFood = () => {
        console.log('the add food btn was clicked');
        // grabing foodname from user
        const foodname = foodItem;
        
        // creating foodData object to send to backend
        /* foodData = {
            foodname: foodname,
            ishot: "yes mam"
        } */

        //debugging
        console.log(`The new food is ${foodname}`)
        

        /* axios.post('/addfood', foodData)
        .then((res)=> {
            const data =res.json();
            return data
        })
        .then((data) => {
            console.log(`${data. food} has been added to the db`)
            window.alert('Your food has been updated')

        })
        .catch((error) => {

            console.log('the fetch to add food fucked up', error)
        })
 */

      }


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
            <button onClick={clickAddFood}>Add food</button>
            </div>
        </>

    )
}


export default Addfood;
