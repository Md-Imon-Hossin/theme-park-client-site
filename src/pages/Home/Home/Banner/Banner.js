import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
// Import Banner Image 
// import banner1 from '../../../../images/banner/banner1.jpg' 
// import banner2 from '../../../../images/banner/banner2.jpg' 
// import banner3 from '../../../../images/banner/banner3.jpg' 
// import banner4 from '../../../../images/banner/banner4.jpg' 

import banner1 from '../../../../images/cut/banner-girl.jpg'
import banner2 from '../../../../images/cut/banner-ride.jpg'
import banner3 from '../../../../images/cut/banner-water-girl.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <div className='carousel-caption'>
      <p className='text-dark'>WELCOME TO WATERBOOM
</p>
<h3 className='text-dark'>THE GREATEST WATER AND AMUSEMENT PARK IN THE WORLD
</h3> 
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />
    <Carousel.Caption>
    <div className='carousel-caption'>
      <p className='text-dark'>WELCOME TO WATERBOOM
</p>
<h3 className='text-dark'>THE GREATEST WATER AND AMUSEMENT PARK IN THE WORLD
</h3> 
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />
    <Carousel.Caption>
    <div className='carousel-caption'>
      <p className='text-dark'>WELCOME TO WATERBOOM
</p>
<h3 className='text-dark'>THE GREATEST WATER AND AMUSEMENT PARK IN THE WORLD
</h3> 
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner4}
      alt="Third slide"
    />

    <Carousel.Caption>
    <div className='carousel-caption'>
      <h5 className='text-dark'>WELCOME TO WATERBOOM
</h5>
<h3>THE GREATEST WATER AND AMUSEMENT PARK IN THE WORLD
</h3> 
      </div>  
 </Carousel.Caption>
  </Carousel.Item>
   */}
</Carousel>
        </div>
    );
};
export default Banner;