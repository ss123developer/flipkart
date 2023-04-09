import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Ad1 from './img/Ad1.png';
import Ad2 from './img/Ad2.png';
import Ad3 from './img/Ad3.png';
import './Carousel.css';

function Carousels() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Ad1}
          alt="First slide"
        />
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Ad2}
          alt="Second slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Ad3}
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Carousels;