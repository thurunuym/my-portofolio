import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import GameSection from "./components/GameSection";
import LogoBar from "./components/LogoBar";
import Footer from "./components/Footer";

import ContactUs from "./components/ContactUs";


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
              <LogoBar/>
              <AboutMe /> 
              <Services/>   
              <TechStack/>     
              <Projects/>
              <GameSection/>
              <ContactUs />
              <Footer/>
              
                
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
