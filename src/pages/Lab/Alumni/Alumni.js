import './Alumni.scss';
import React, { PropTypes } from 'react'
import Slider from 'react-slick';
import AlumniItem from './AlumniItem/AlumniItem';
import alumniConfig from './alumniConfig';

class Alumni extends React.Component {
  renderAlumni () {
    return alumniConfig.map((item, index) => (
      <div key={index}>
        <AlumniItem
          image={item.image}
          name={item.name}
          biography={item.biography}
        />
      </div>
    ));

  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 10000,
      draggable: false,
      slidesToShow: 1,
      fade: true,
      arrows: false,
      slidesToScroll: 1,
      cssEase: 'cubic-bezier(0.260, 0.530, 0.385, 0.970)',
    };

    return (
      <div className="alumni">
        <Slider className="alumni-photos" {...settings}>
          {this.renderAlumni()}
        </Slider>
      </div>
    );
  }
}


export default Alumni;
