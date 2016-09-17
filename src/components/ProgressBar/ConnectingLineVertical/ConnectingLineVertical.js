/* eslint-disable */
import './ConnectingLineVertical.scss';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import React from 'react'
import _ from 'underscore';

const {debounce} = _;

class ConnectingLineVertical extends React.Component {
  componentWillMount() {
    this.controller = new ScrollMagic.Controller();
  }
  componentDidMount() {
    this.initializeScene();
    window.onresize = this.setDuration.bind(this);
    this.getTriggerElementHeight.bind(this);
  }
  componentWillUnmount() {
    this.scene.destroy(true)
    this.scene = null;
  }
  getWindowHeight() {
    return window.innerWidth
  }
  getTriggerElementHeight() {
    return this.triggerElement.clientHeight
  }
  setDuration() {
    if (!this.scene) return
    this.scene.duration(this.getTriggerElementHeight());
  }
  setTriggerElementRef(element) {
    this.triggerElement = element;
  }
  setTargetElementRef(element) {
    this.targetElement = element;
  }
  initializeScene() {
    if (!this.triggerElement || !this.targetElement) {
      return
    }

    const tween = new TimelineMax().add([TweenMax.fromTo(this.targetElement, 1, {
        y: '-100%'
      }, {
        y: '0%',
        ease: Linear.easeNone
      })]);

    this.scene = new ScrollMagic
      .Scene({
        duration: this.getTriggerElementHeight(),
        offset: 0,
        triggerHook: 0.4
      })
      .setTween(tween)
      .addTo(this.controller)
      .triggerElement(this.triggerElement)
  }
  render() {
    const className = "connecting-line " + this.props.className
    return (
      <div
        ref={this.setTriggerElementRef.bind(this)}
        className={className}>
        <div
          ref={this.setTargetElementRef.bind(this)}
          className="connecting-line-progress"/>
      </div>
    )
  }
}

ConnectingLineVertical.defaultProps = {
  className: ''
};

export default ConnectingLineVertical;
