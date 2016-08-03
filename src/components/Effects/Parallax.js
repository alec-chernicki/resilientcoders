import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import React from 'react'
import ReactDOM from 'react-dom';

class Parallax extends React.Component {
  componentWillMount () {
    this.controller = new ScrollMagic.Controller();
  }
  componentDidMount () {
    if (!this.triggerElement || !this.targetElement) {
      return
    }

    const tween = new TimelineMax ()
      .add([
        TweenMax.fromTo(this.targetElement, 1, {y: this.props.from}, {y: this.props.to, ease: Linear.easeNone})
      ]);

    new ScrollMagic.Scene({
        duration: window.innerWidth,       // the scene should last for a scroll distance of 100px
        offset: 0,
        triggerHook: 1,           // start this scene after scrolling for 50px
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
      <div ref={this.setTriggerElementRef.bind(this)} className={this.props.className}>
        <div ref={this.setTargetElementRef.bind(this)}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Parallax;
