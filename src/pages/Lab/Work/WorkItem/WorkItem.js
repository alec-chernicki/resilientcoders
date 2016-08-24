import './WorkItem.scss';
import React, {PropTypes} from 'react'
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

class WorkItem extends React.Component {
  componentWillMount() {
    this.controller = new ScrollMagic.Controller();
  }
  componentDidMount() {
    if (!this.triggerElement || !this.targetElement) {
      return
    }
  }
  setTargetElementRef(element) {
    this.targetElement = element;
  }
  setTriggerElementRef(element) {
    this.triggerElement = element;
  }
  render() {
    const {image, title, description, note} = this.props;
    return (
      <div
        className="work-flex-item"
        ref={this
          .setTriggerElementRef
        .bind(this)}>
        <div
          className="work-item accent-link-underline-trigger active"
          ref={this.setTargetElementRef.bind(this)}>
          <div className="work-item-image">
            <img src={image} alt="Case study by Resilient Lab"/>
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
