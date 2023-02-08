import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Header from './components/header'
import Navbar from './components/navbar';


function App() {

  const [getMessage, setGetMessage] = useState({})

  /* useEffect(() => {
    axios.get('http://localhost:5000/')
    .then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, []) */


  return (
    <div>
      <Header></Header>

      <main>
        <section>
          
        </section>
        <Navbar></Navbar>
        
      </main>
    </div>
  );
}

export default App;
