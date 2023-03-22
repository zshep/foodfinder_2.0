import React, { useState } from "react";
import axios from 'axios';



function Findfood() {
  //setting state for food variable
  const [food, setFood] =useState();
  
  // setting state to hide filter
  const [display, setDisplay] = useState('none');
  // setting state for filter
  const [hotfilter, sethotFilter] = useState(false);
  const [coldfilter, setcoldFilter] = useState(false);

  const styles = {
    filter: {
      display: display
    }
  }
  //function to do get request
  async function getRequest(route) {
 

    const request = await axios.get(route)
    .then((result) => {
      
      console.log(result)
      console.log(result.data)
      console.log(result.data.foodname)
      setFood(result.data.foodname)
    }
    
    )
    .catch((error) => {
      console.error(`The get ${route} request did not work`, error);
    });
    console.log('function getRequest complete')
      
    return request
  }

  //function for click btn handler
  const clickFindFood = () => {
    console.log('the find food btn was clicked');
    
    //logic to get food with no filters
    if (hotfilter && coldfilter === false){
      console.log('no filter search started')
      getRequest('/food');

    } else if ( hotfilter === true && coldfilter === false){
      console.log('hot filter search started')
      getRequest('/food/hot');

    } else if (coldfilter === true) {
      console.log('cold filter search started')
      getRequest('/food/cold')

    }
        
    
  }

  function addfilter() {
    console.log('the add filter btn was pushed')
    if (display == 'none') {
      setDisplay('flex')
    } else {
      setDisplay('none')

    }

  }
  const isHot = event => {
    if (event.target.checked) {
      console.log('filter by hot')
      sethotFilter(true);
    } else {
      sethotFilter(false);
      console.log('do not filter by hot')
    }
  }

  const isCold = event => {
    if (event.target.checked) {
      console.log('filter by cold')
      setcoldFilter(true);
    } else {
      setcoldFilter(false);
      console.log('do not filter by cold')
    }

  }


  return (
    <>
      <div className="sectionheader">
        <h1>What should we have for dinner?</h1>

      </div>

      <div className="fooditem" id="givenfooditem">
        <p>{food}</p>
      </div>

      <div className="button">

        <button id="addbtn" onClick={clickFindFood}>Find a food</button>
      </div>

      <div className="filterContainer">

        <button id="filterbtn" onClick={addfilter}>Add a Filter</button>
        <div className="filteritems" style={styles.filter}>
          <div>
          <label htmlFor="ishot">search by hot food</label>
          <input type='checkbox' id="isHot" name="ishot" onChange={isHot}></input>
          </div>
          <div>
          <label htmlFor="iscold">search by cold food</label>
          <input type='checkbox' id="iscold" name="iscold" onChange={isCold}></input>
          </div>
        </div>

      </div>

    </>

  )


}

export default Findfood;