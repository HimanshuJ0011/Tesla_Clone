import React from 'react';
import { useState, useEffect } from 'react';
import { Element } from 'react-scroll';

import { BrowserRouter, Route, Routes } from "react-router-dom";
//import MainLayout from '../layouts/MainLayout';
import DemoButtom from '../components/DemoButtom';
import Models from '../components/Models';
import NavbarT from '../components/NavbarT';
import Video from '../media/Homepage-Demo-Drive-Desktop-NA.webm'



const Home = () => {

  // const scrolled = document.documentElement.scrollTop;
  // const [ position , setPosition]= useState(scrolled);
   
  // useEffect( ()=>{

  //   const handelscroll = () => {

  //     if (position > 300){
       
  //       setPosition(600);
        
  //       window.scrollTo({
  //         top:0 , behavior:'smooth'
  //       })

  //     } 
  //     else if (position <= 300){
        
  //     }
  //   };

  //   window.addEventListener('scroll', handelscroll);

  //   return () => {
  //     window.removeEventListener('scroll', handelscroll);
  //   };

  //   } , []);

 

    
  return (
    <div>

      <Element className=' '>

        <div className=' mt-8 absolute z-20  '>
          <BrowserRouter>
            <NavbarT />
          </BrowserRouter>

        </div>

        <div className=' text-center absolute top-24  text-white w-full'>

          <h1 className='text-5xl font-semibold  font-sans '>Experience Tesla</h1>
          <p className='mt-2 font-semibold'  >Schedule a Demo Drive Today</p>

        </div>
        <div className='h-screen  z-10'>
          <video src={Video} autoPlay loop muted />

        </div>



        <div className='text-center mt-96 absolute top-64 w-full '>

          <DemoButtom />

        </div>
        

      </Element>


      <Element name='two'>
        <Models
          ltext=" Explore Inventry"
          rtext="Customer Order"
          modelname=" Model 3"
          pricetag="Starting at $32,740
         After Federal Tax Credit"
          backgroundImg="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-NA.jpg"
        />

      </Element>

      <Element>
        <Models
          ltext=" Explore Inventry"
          rtext="Customer Order"
          modelname=" Model Y"
          pricetag="Starting at $40,240
         After Federal Tax Credit"
          backgroundImg=" https://digitalassets.tesla.com/tesla-contents/image/upload/h_2400,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-Y-Global-Desktop"
        />

      </Element>

      <Element>
        <Models
          ltext=" Explore Inventry"
          rtext="Customer Order"
          modelname=" Model S"
          pricetag="Explore Inventory"
          backgroundImg="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-LHD-6.22.jpg"
        />


      </Element>

      <Element>
        <Models
          ltext=" Explore Inventry"
          rtext="Customer Order"
          modelname=" Model X"
          pricetag="Explore Inventory"
          backgroundImg="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-X-Desktop-LHD"
        />

      </Element>
      <Element>
        <Models
          ltext=" Order Now"
          rtext=" Learn More"
          modelname=" Solar panel"
          pricetag=" Schedule a Virtual Consultation"
          backgroundImg="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/425_HP_SolarPanels_D"
        />

      </Element>

      <Element>
        <Models
          ltext=" Order Now"
          rtext=" Learn More"
          modelname=" Solar Roof"
          pricetag=" Produce Clean Energy From Your Roof"
          backgroundImg="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-SolarRoof-Desktop-Global"
        />

      </Element>
      <Element>
        <Models
          ltext=" Order Now"
          rtext=" Learn More"
          modelname=" Powerwall"
          pricetag=""
          backgroundImg="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Powerwall-Desktop.jpg"
        />


      </Element>


    </div>

  );
};

export default Home;
