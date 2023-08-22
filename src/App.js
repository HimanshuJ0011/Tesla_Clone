import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
//import DropSection from './components/DropSection';
//import NavbarT from './components/NavbarT';
import Footer from './components/Footer';
import TelsaAccount from './pages/TelsaAccount';
import { useState ,useEffect } from "react";

function App() {

  return (
    <div className="App scroll-smooth">
      
      
      <BrowserRouter>
       
        <Routes>
          <Route path='/TeslaAccount' element={<TelsaAccount />} />
        </Routes>

      </BrowserRouter>

      <Home />
      <Footer />


    </div>
  );
}

export default App;
