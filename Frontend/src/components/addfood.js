import React, {useState, useEffect}  from "react";
import axios from "axios";
const foodItem = document.querySelector('#newFood');
const checkbox = document.querySelector('#isHot');

function Addfood() {
       
    // creating foodData object to send to backend
    const [foodData, setfoodData] = useState({
        foodname: '',
        
    })
    // function to grab
    const newFood = event => {
        const foodvalue = event.target.value
        
        setfoodData({
            foodname: foodvalue
        })
        
    }
     
      const clickAddFood = () => {
        console.log('the add food btn was clicked');
                      

        //debugging
        
        console.log(foodData);
        console.log(`The new food is ${foodData.foodname}`)
        

        axios.post('/addfood', {
            foodname: foodData.foodname,
            ishot: true,
        })
        
        .then((response) => {
            console.log(response.data)
            console.log(`${response.data} has been added to the db`)
            window.alert('Your food has been updated')

        })
        .catch((error) => {

            console.log('the fetch to add food fucked up', error)
        })
        


      }


    return (
        <>
        <div className="sectionheader">
            <h1>What food what would you like to add?</h1>
        
        </div>
            <form className="foodForm">
                <div className='newfoodItems'>
                    <label htmlFor="foodname">Add food here</label>
                    <input type="text" id="newFood" name="foodname" onChange={newFood}></input>
                </div>
                <div className='newfoodItems'>
                        <label htmlFor="ishot">Is this food hot?</label>
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
