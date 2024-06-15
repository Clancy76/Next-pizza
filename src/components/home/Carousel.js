import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imageProp = ["pizza", "burger", "milkshake"];

function CarouselComponent() {
  return (
    <Carousel
      autoPlay
      navButtonsAlwaysVisible
      infiniteLoop
      showStatus={false}
      emulateTouch
      showThumbs={false}
    >
       <img
              src={"https://i.pinimg.com/originals/ae/64/fd/ae64fd89dec81365bd9230736b292828.jpg"}
              alt="pizza"
            />
             <img
              src={"https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              alt="pizza"
            />
             <img
              src={"https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              alt="pizza"
            />
    </Carousel>
  );
}

export default CarouselComponent;