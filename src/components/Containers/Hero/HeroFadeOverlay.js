/* eslint-disable */
import './Hero.scss';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import React from 'react'

class HeroFadeOverlay extends React.Component {
  componentWillMount() {
    this.controller = new ScrollMagic.Controller();
  }
  componentDidMount() {
    this.initializeSceneOne();
    this.initializeSceneTwo();
  }
  componentWillUnmount() {
    this.sceneOne.destroy(true)
    this.sceneOne = null;
    this.sceneTwo.destroy(true)
    this.sceneTwo = null;
  }
  setTriggerElementRef(element) {
    this.triggerElement = element;
  }
  setTargetElementOneRef(element) {
    this.targetElementOne = element;
  }
  setTargetElementTwoRef(element) {
    this.targetElementTwo = element;
  }
  initializeSceneOne() {
    if (!this.triggerElement || !this.targetElementOne) {
      return
    }

    const tween = new TimelineMax().add([TweenMax.fromTo(this.targetElementOne, 1, {
        opacity: 0
      }, {
        opacity: 0.85,
        ease: Power1.easeOut
      })]);

    this.sceneOne = new ScrollMagic
      .Scene({
        duration: '100%',
        triggerHook: 0,
      })
      .setTween(tween)
      .addTo(this.controller)
      .triggerElement(this.triggerElement)
  }
  initializeSceneTwo() {
    if (!this.triggerElement || !this.targetElementTwo) {
      return
    }

    const tween = new TimelineMax().add([TweenMax.fromTo(this.targetElementTwo, 1, {
        scaleX: 1,
        scaleY: 1
      }, {
        scaleX: 1.3,
        scaleY: 1.3,
        ease: Power1.easeOut
      })]);

    this.sceneTwo = new ScrollMagic
      .Scene({
        duration: '100%',
        offset: 0,
        triggerHook: 0,
      })
      .setTween(tween)
      .addTo(this.controller)
      .triggerElement(this.triggerElement)
  }
  render() {
    return (
      <div ref={this.setTriggerElementRef.bind(this)} className="hero__fade-overlay-container">
        <div
          ref={this.setTargetElementOneRef.bind(this)}
          className="hero__fade-overlay"/>
        <div
          ref={this.setTargetElementTwoRef.bind(this)}
          className="hero__image-container"
        >
          {this.props.imageContent}
        </div>
      </div>
    )
  }
}

export default HeroFadeOverlay;
