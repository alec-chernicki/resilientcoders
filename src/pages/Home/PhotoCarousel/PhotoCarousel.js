import './PhotoCarousel.scss';
import React from 'react'
import Slider from 'react-slick';
import alumniOne from '../../../images/dunia.png';
import alumniTwo from '../../../images/alumniTwo.png';
import alumniThree from '../../../images/alumniThree.png';

class HomeCarousel extends React.Component {
  render() {
    const CAROUSEL_SETTINGS = {
      className: 'center',
      centerMode: true,
      infinite: true,
      slidesToShow: 3,
      speed: 400,
      autoplay: true,
      autoplaySpeed: 4500,
      cssEase: 'ease-in-out',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };

    return (
      <Slider {...CAROUSEL_SETTINGS}>
        <div>
          <img src={alumniOne} />
          <div className="slider-details">
            <h2>Student Name</h2>
          </div>
        </div>
        <div>
          <img src={alumniTwo}  />
          <div className="slider-details">
            <h2>Student Name</h2>
          </div>
        </div>
        <div>
          <img src={alumniThree}/>
          <div className="slider-details">
            <h2>Student Name</h2>
          </div>
        </div>
        <div>
          <img src={alumniOne} />
          <div className="slider-details">
            <h2>Student Name</h2>
          </div>
        </div>
        <div>
          <img src={alumniTwo}  />
          <div className="slider-details">
            <h2>Student Name</h2>
          </div>
        </div>
        <div>
          <img src={alumniThree}/>
          <div className="slider-details">
            <h2>Student Name</h2>
          </div>
        </div>
      </Slider>
    );
  }
}

export default HomeCarousel;
