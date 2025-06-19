import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import TechStack from "./components/TechStack";

import "./app.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        

        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <AboutMe /> 
              <Services/>   
              <TechStack/>     
                
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
