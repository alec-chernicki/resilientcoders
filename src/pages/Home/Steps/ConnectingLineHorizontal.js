import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import React from 'react'
import ReactDOM from 'react-dom';

class ConnectingLineHorizontal extends React.Component {
  componentWillMount () {
    this.controller = new ScrollMagic.Controller();
  }
  componentDidMount () {
    if (!this.triggerElement || !this.targetElement) {
      return
    }

    const tween = new TimelineMax ()
      .add([
        TweenMax.fromTo(this.targetElement, 1, {width: '0%'}, {width: '100%', ease: Linear.easeNone})
      ]);

    new ScrollMagic.Scene({
        duration: this.triggerElement.clientHeight,
        offset: 0,
        triggerHook: 0.5,           // start this scene after scrolling for 50px
    })
      .setTween(tween)            // pins the element for the the scene's duration
      .addTo(this.controller)
      .triggerElement(this.triggerElement)      // assign the scene to the controller
  }
  getWindowHeight () {
    return window.innerWidth
  }
  setTriggerElementRef (element) {
    this.triggerElement = element;
  }
  setTargetElementRef (element) {
    this.targetElement = element;
  }
  render () {
    return (
      <div ref={this.setTriggerElementRef.bind(this)} className="connecting-line-horizontal">
        <div ref={this.setTargetElementRef.bind(this)} className="connecting-line-progress-horizontal"/>
      </div>
    )
  }
}

export default ConnectingLineHorizontal;
