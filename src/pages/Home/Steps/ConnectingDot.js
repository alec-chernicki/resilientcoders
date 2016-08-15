import './ConnectingDot.scss';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import React from 'react'

class ConnectingDot extends React.Component {
  componentWillMount() {
    this.controller = new ScrollMagic.Controller();
  }
  componentDidMount() {
    if (!this.triggerElement || !this.targetElement) {
      return
    }

    this.scene = new ScrollMagic
      .Scene({offset: 0, triggerHook: 0.5})
      .setClassToggle(this.targetElement, 'active')
      .addTo(this.controller)
      .triggerElement(this.triggerElement)
  }
  setTargetElementRef(element) {
    this.targetElement = element;
  }
  setTriggerElementRef(element) {
    this.triggerElement = element;
  }
  componentWillUnmount() {
    this
      .scene
      .destroy(true)
    this.scene = null;
  }
  render() {
    return (
      <div ref={this
        .setTriggerElementRef
      .bind(this)}>
        <div className="dot-with-circle" ref={this
          .setTargetElementRef
          .bind(this)}>
          <div className="dot-pulse"/>
        </div>
      </div>
    )
  }
}

export default ConnectingDot;

export default ConnectingDot;
