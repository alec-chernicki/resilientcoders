import './WorkItem.scss';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom';

class WorkItem extends React.Component {
  componentWillMount () {
    this.controller = new ScrollMagic.Controller();
  }
  componentDidMount () {
    if (!this.triggerElement || !this.targetElement) {
      return
    }

    this.scene = new ScrollMagic.Scene({
        offset: 0,
        triggerHook: 0.5,
    })
      .setClassToggle(this.targetElement, 'active')
      .addTo(this.controller)
      .triggerElement(this.triggerElement)
  }
  setTargetElementRef (element) {
    this.targetElement = element;
  }
  setTriggerElementRef (element) {
    this.triggerElement = element;
  }
  componentWillUnmount() {
    this.scene.destroy(true)
    this.scene = null;
  }
  render () {
    const { image, title, description, note } = this.props;
    return (
      <div className="work-flex-item" ref={this.setTriggerElementRef.bind(this)}>
        <div
          className="work-item accent-link-underline-trigger"
          ref={this.setTargetElementRef.bind(this)}
        >
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
            <a className="button" href="#">
              View Case
            </a>
          </div>
          <div className="work-item-image" >
            <img src={image} />
          </div>
        </div>
      </div>
    )
  }
}

export default WorkItem;
