import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  
  const [getMessage, setGetMessage] = useState({})

  useEffect(()=>{
    axios.get('https://shepfoodfinder.herokuapp.com/flask/hello').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])


  return (
    <div>
      <h1> The force is with you, young shep, but you are not a jedi yet</h1>

    </div>
  );
}

export default App;
