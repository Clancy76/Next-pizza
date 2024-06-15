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
              src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thepioneerwoman.com%2Ffood-cooking%2Frecipes%2Fa36080074%2Fclassic-cheese-pizza%2F&psig=AOvVaw2ym2d3w-bgH4a_yP_9o4Gx&ust=1718523759014000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOC9vJOO3YYDFQAAAAAdAAAAABAE"}
              alt="pizza"
            />
          </div>
        );
      })}
    </Carousel>
  );
}

export default CarouselComponent;