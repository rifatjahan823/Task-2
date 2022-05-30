import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import slider3 from '../../../img/slider1.jpg'
import slider2 from '../../../img/Screenshot_1.png'
import slider1 from '../../../img/Cover Page.png'

const Banner = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img style={{height:'510px'}}
            className="d-block w-100"
            src={slider1}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'510px'}}
            className="d-block w-100"
            src={slider2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'510px'}}
            className="d-block w-100"
            src={slider3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;