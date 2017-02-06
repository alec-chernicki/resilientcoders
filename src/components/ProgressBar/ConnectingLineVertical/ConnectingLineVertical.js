/* eslint-disable */
import './ConnectingLineVertical.scss';
import ScrollMagic from 'scrollmagic';
import 'gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import React from 'react';

const verticalLineController = new ScrollMagic.Controller();

class ConnectingLineVertical extends React.Component {
  componentWillMount() {
    this.controller = new ScrollMagic.Controller();
  }
  componentDidMount() {
    this.initializeScene();
    window.addEventListener('resize', this.handleResize)
  }
  componentWillUnmount() {
    this.scene.destroy(true)
    this.scene = null;
  }
  getTriggerElementHeight() {
    return this.triggerElement.clientHeight
  }
  handleResize() {
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
      .addTo(verticalLineController)
      .addIndicators()
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
