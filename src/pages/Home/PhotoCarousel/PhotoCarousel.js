import './PhotoCarousel.scss';
import React from 'react'
import Slider from 'react-slick';
import alumniOne from './alumniOne.png';
import alumniTwo from './alumniTwo.png';
import alumniThree from './alumniThree.png';
import alumniFour from './alumniFour.png';

class PhotoCarousel extends React.Component {
  render() {
    const CAROUSEL_SETTINGS = {
      className: 'center',
      centerMode: true,
      infinite: true,
      slidesToShow: 3,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
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
          <img src={alumniOne} role="presentation" />
          <div className="slider-details">
            <h2>Dunia Goncalves</h2>
          </div>
        </div>
        <div>
          <img src={alumniTwo}  role="presentation" />
          <div className="slider-details">
            <h2>Jean Exavier</h2>
          </div>
        </div>
        <div>
          <img src={alumniThree}role="presentation" />
          <div className="slider-details">
            <h2>Ashley Liang</h2>
          </div>
        </div>
        <div>
          <img src={alumniFour} role="presentation" />
          <div className="slider-details">
            <h2>Johan Baez</h2>
          </div>
        </div>
      </Slider>
    );
  }
}

export default PhotoCarousel;
