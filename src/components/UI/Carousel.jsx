import React from 'react'
import Slider from "react-slick";
import '../../style/carousel.css'



const Carousel = () => {
  
  const settings = {
    dots: true,
    infinity: true,
    speed: 2000,
    slidesToShow:1,
    slidesToScroll:1
  }
  return (
    <Slider {...settings}>
      <div className="slider_one">
        <div className="slider__top">
          <h3>Excellent course of materials</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi enim accusamus quae iure dignissimos sed!</p>
        </div>
        <div className="slider__user">
          <h4>John Doe</h4>
          <p>California United State</p>
        </div>
      </div>
      <div className="slider_two">
        <div className="slider__top">
          <h3>Excellent course of materials</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi enim accusamus quae iure dignissimos sed!</p>
        </div>
        <div className="slider__user">
          <h4>John Doe</h4>
          <p>California United State</p>
        </div>
      </div>
      <div className="slider_tree">
        <div className="slider__top">
          <h3>Excellent course of materials</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi enim accusamus quae iure dignissimos sed!</p>
        </div>
        <div className="slider__user">
          <h4>John Doe</h4>
          <p>California United State</p>
        </div>
      </div>
    </Slider>
  )
}

export default Carousel