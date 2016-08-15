import React from 'react'
import Slider from 'react-slick';

class HomeCarousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      draggable: false,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      autoplay: true,
      fade: true,
      arrows: false,
      slidesToScroll: 1,
      cssEase: 'cubic-bezier(0.260, 0.530, 0.385, 0.970)'
    };
    return (
      <Slider className="program-photo" {...settings}>
        <div className="one"/>
        <div className="two"/>
        <div className="three"/>
        <div className="four"/>
      </Slider>
    );
  }
}

export default HomeCarousel;
