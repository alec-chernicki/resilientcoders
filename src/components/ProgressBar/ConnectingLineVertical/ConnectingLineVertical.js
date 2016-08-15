/* eslint-disable */
import './ConnectingLineVertical.scss';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import React from 'react'

class ConnectingLineVertical extends React.Component {
  componentWillMount() {
    this.controller = new ScrollMagic.Controller();
  }
  componentDidMount() {
    if (!this.triggerElement || !this.targetElement) {
      return
    }

    const tween = new TimelineMax().add([TweenMax.fromTo(this.targetElement, 1, {
        height: '0%'
      }, {
        height: '100%',
        ease: Power2.easeIn
      })]);

    this.scene = new ScrollMagic
      .Scene({duration: this.triggerElement.clientHeight, offset: 0, triggerHook: 0.5})
      .setTween(tween)
      .addTo(this.controller)
      .triggerElement(this.triggerElement)
  }
  componentWillUnmount() {
    this
      .scene
      .destroy(true)
    this.scene = null;
  }
  getWindowHeight() {
    return window.innerWidth
  }
  setTriggerElementRef(element) {
    this.triggerElement = element;
  }
  setTargetElementRef(element) {
    this.targetElement = element;
  }
  render() {
    const className = "connecting-line " + this.props.className
    return (
      <div
        ref={this
        .setTriggerElementRef
        .bind(this)}
        className={className}>
        <div
          ref={this
          .setTargetElementRef
          .bind(this)}
          className="connecting-line-progress"/>
      </div>
    )
  }
}

ConnectingLineVertical.defaultProps = {
  className: ''
};

export default ConnectingLineVertical;
