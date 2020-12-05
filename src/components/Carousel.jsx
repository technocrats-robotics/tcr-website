import { CarouselProvider, Slider } from "pure-react-carousel";
import React from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import CustomDotGroup from './CustomDotGroup';

import CustomCardSlide from "./CustomCardSlide";


const Carousel = () => (
  <div>
  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={2}
    totalSlides={3}
  >
    <CustomDotGroup slides={3} />
    <Slider>
      <CustomCardSlide
        image="https://place-hold.it/800x800&text=Matthew&fontsize=32"
        index={0}
        header="Matthew House"
        meta="Friend"
      />
      <CustomCardSlide
        header="Elliot Baker"
        image="https://place-hold.it/800x800&text=Elliot&fontsize=32"
        index={1}
        meta="Friend"
      />
      <CustomCardSlide
        header="Steve Sanders"
        image="https://place-hold.it/800x800&text=Steve&fontsize=32"
        index={2}
        meta="Friend"
      />
    </Slider>
  </CarouselProvider>
  
  </div>
);

export default Carousel;

/*
import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Divider } from "semantic-ui-react";
import "pure-react-carousel/dist/react-carousel.es.css";

import CustomDotGroup from "./CustomDotGroup";

const ImageCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={1}
    totalSlides={3}
  >
    <Slider>
      <Slide tag="a" index={0}>
        <Image src="https://lorempixel.com/800/800/cats/0" />
      </Slide>
      <Slide tag="a" index={1}>
        <Image src="https://lorempixel.com/800/800/cats/1" />
      </Slide>
      <Slide tag="a" index={2}>
        <Image src="https://lorempixel.com/800/800/cats/2" />
      </Slide>
    </Slider>

    <Divider />
    <CustomDotGroup slides={3} />
  </CarouselProvider>
);

export default ImageCarousel;
*/