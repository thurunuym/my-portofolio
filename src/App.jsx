import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import Home from "./components/Home";
import AboutMe from './components/AboutMe'; 
import Services from './components/Services';
import Contact from './components/Contact';
import Test from './components/Test';
// import Test10 from './components/FlipGrid';
import Test2 from './components/Test2';

import './app.css';

function App() {

  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Test/>}/>
        {/* <Route path="/test10" element={<Test10/>}/> */}
        <Route path="/Test2" element={<Test2/>}/>
      
      <Route path = "/" element={
      <>
          <Header/>
          <Home/>

          {/*
          <AboutMe/> 
          <Services/>
          <Contact/>  */}
      </>
      }
      />
</Routes>
      </BrowserRouter>
          
    
  );
}

export default App;
