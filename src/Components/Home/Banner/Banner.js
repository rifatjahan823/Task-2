import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import slider3 from '../../../img/slider1.jpg'
import slider2 from '../../../img/Screenshot_1.png'
import slider1 from '../../../img/Cover Page.png';
import Reveal from 'react-reveal/Reveal';
import { Fade, Roll, Rotate, Zoom } from 'react-reveal';
import Jump from 'react-reveal/Jump';



const Banner = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
      
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <Zoom>
       
          <img style={{height:'510px'}}
            className="d-block w-100"
            src={slider1}
            alt="Second slide"
          />
          
          </ Zoom >
        </Carousel.Item>
       
        <Carousel.Item>
        <Zoom left>
          <img style={{height:'510px'}}
            className="d-block w-100"
            src={slider2}
            alt="Third slide"
          />
          </Zoom>
        </Carousel.Item>
        <Carousel.Item>
        <Zoom right>
          <img style={{height:'510px'}}
            className="d-block w-100"
            src={slider3}
            alt="Third slide"
          />
          </Zoom>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;