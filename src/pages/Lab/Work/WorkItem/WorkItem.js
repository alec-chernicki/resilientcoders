import './WorkItem.scss';
import React, {PropTypes} from 'react'
import ScrollMagic from 'scrollmagic';
import Parallax from '../../../../components/Effects/Parallax';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

class WorkItem extends React.Component {
  render() {
    const {image, title, description, note} = this.props;
    return (
      <div className="work-flex-item">
        <Parallax
          from={160} to={-200}
          className="work-item-accent"
        />
        <div className="work-item accent-link-underline-trigger active">
          <div className="work-item-image-container">
            <div className="work-item-image">
              <img src={image} className="work-item-image-inner" alt="Case study by Resilient Lab"/>
            </div>
          </div>
          <div className="work-details">
            <p className="work-company">
              {title}
            </p>
            <p className="work-note">
              {note}
            </p>
            <p className="work-text">
              {description}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

WorkItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default WorkItem;
