import './PhotoCarousel.scss';
import React from 'react'
import Slider from 'react-slick';
import alumniOne from './alumniOne.png';
import alumniTwo from './alumniTwo.png';
import alumniThree from './alumniThree.png';
import alumniFour from './alumniFour.png';

class HomeCarousel extends React.Component {
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
          <img src={alumniOne} />
          <div className="slider-details">
            <h2>Dunia Goncalves</h2>
          </div>
        </div>
        <div>
          <img src={alumniTwo}  />
          <div className="slider-details">
            <h2>Jean Exavier</h2>
          </div>
        </div>
        <div>
          <img src={alumniThree}/>
          <div className="slider-details">
            <h2>Ashley Liang</h2>
          </div>
        </div>
        <div>
          <img src={alumniFour} />
          <div className="slider-details">
            <h2>Johan Baez</h2>
          </div>
        </div>
      </Slider>
    );
  }
}

export default HomeCarousel;
