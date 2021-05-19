import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./my-carousal.style.css";
import slide1 from "../../assets/img/carousal/slide1.jpg";
import slide3 from "../../assets/img/carousal/slide3.jpg";
import slide4 from "../../assets/img/carousal/slide4.jpg";
import ScrollDown from '../scroll-down/scroll-down.component';


const MyCarousal = () => {
    return (
        <div id="home">
            <Carousel controls={false} indicators interval={2500} pauseOnHover={false}>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img"
      src={slide1}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img"
      src={slide4}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img"
      src={slide3}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
<ScrollDown/>
        </div>
    )
}

export default MyCarousal;
