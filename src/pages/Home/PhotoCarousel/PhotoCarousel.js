import './PhotoCarousel.scss';
import React from 'react'
import Slider from 'react-slick';
import rosterMembersConfig from '../../Bootcamp/Roster/rosterMembersConfig';

class PhotoCarousel extends React.PureComponent {
  renderPhotos() {
    return rosterMembersConfig.map((member, index) => {
      return (
        <div key={index}>
          <img
            src={member.image}
            role="presentation"
          />
          <div className="slider-details">
            <h2>
              {member.name}
            </h2>
          </div>
        </div>
      )
    });
  }
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
        {this.renderPhotos()}
      </Slider>
    );
  }
}

export default PhotoCarousel;
