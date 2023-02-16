import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './components/style.css'
// import components needed
import Header from './components/header'
import Navbar from './components/navbar';
import Addfood from './components/addfood';
import Findfood from './components/findfood';
import Seefood from './components/seefood';

// import router libraries from react-router
import {
  Routes,
  Route,
} from "react-router-dom";





function App() {
  
  
  
  return (
    <div>
      <Header></Header>

      <main>
        <Navbar></Navbar>
        <section>
          <Routes>
            <Route exact path="/" element={<Findfood />} />

            <Route exact path="/findfood" element={<Findfood />} />

            <Route exact path="/addfood" element={<Addfood />} />

            <Route exact path="/seefood" element={<Seefood />} />


          </Routes>

        </section>


      </main>
    </div>
  );
}

export default App;
