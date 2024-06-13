import React from "react";
import CarouselFile from "./CarouselFile";
import Home from "./Home";
import { ToastContainer } from "react-bootstrap";
import CardProfile from "./CardProfile";
import Services from "./Service";
import Reviews from "./Reviews";
import ContactForm from "./ContactForm";
function Main2(){
    return (
        <div className="maincontainer">
          <CarouselFile />
          <Home  />
          <ToastContainer position="top-right" />
          <Services />
          <Reviews />
           {/* <CardProfile/> */}
           <ContactForm />
        </div>)

}

export default Main2;