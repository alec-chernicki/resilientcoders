import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import React from 'react'
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class Parallax extends React.Component {
  componentWillMount() {
    this.controller = new ScrollMagic.Controller();
  }
  componentDidMount() {
    if (!this.triggerElement || !this.targetElement) {
      return
    }

    const tween = new TimelineMax().add([TweenMax.fromTo(this.targetElement, 1, {
        y: this.props.from
      }, {
        y: this.props.to,
        ease: Linear.easeNone
      })]);

    new ScrollMagic
      .Scene({duration: window.innerWidth, offset: 0.3, triggerHook: 1})
      .setTween(tween)
      .addTo(this.controller)
      .triggerElement(this.triggerElement)
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
    return (
      <div ref={this.setTriggerElementRef.bind(this)}>
        <div
          className={this.props.className}
          ref={this.setTargetElementRef.bind(this)}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Parallax;
