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
      {imageProp.map((image, index) => {
        return (
          <div
            key={index}
            style={{ maxHeight: "36rem" }}
            className="object-center brightness-50"
          >
            <img
              src={"https://i.pinimg.com/originals/ae/64/fd/ae64fd89dec81365bd9230736b292828.jpg"}
              alt="pizza"
            />
            <img
              src={"https://static.vecteezy.com/system/resources/previews/030/660/303/large_2x/pizza-with-white-background-high-quality-ultra-hd-free-photo.jpg"}
              alt="pizza"
            />
          </div>
        );
      })}
    </Carousel>
  );
}

export default CarouselComponent;