import ScrollMagic from 'ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import 'gsap';
import TweenMax from 'TweenMax';
import TimelineMax from 'TimelineMax';
import React from 'react';
import classNames from 'classnames';

class Parallax extends React.Component {
  componentWillMount() {
    this.controller = new ScrollMagic.Controller();
  }
  componentDidMount() {
    if ((!this.triggerElement || !this.props.triggerRef) && !this.targetElement) {
      return
    }

    const tween = new TimelineMax().add([TweenMax.fromTo(this.targetElement, 1, {
        y: this.props.from
      }, {
        y: this.props.to,
        ease: this.props.ease
      })]);

    this.scene = new ScrollMagic
      .Scene({duration: this.props.duration , offset: 0.3, triggerHook: this.props.triggerHook})
      .setTween(tween)
      .addTo(this.controller)
      .triggerElement(this.props.triggerRef || this.triggerElement)
  }
  componentWillUnmount() {
    this.scene.destroy(true)
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
    const {triggerRef} = this.props;
    const className = classNames('stretch-to-fit', this.props.className);

    if (triggerRef) {
      return (
        <div
          className={className}
          ref={this.setTargetElementRef.bind(this)}
        >
          {this.props.children}
        </div>
      )
    }

    return (
      <div
        ref={this.setTriggerElementRef.bind(this)}
      >
        <div
          className={className}
          ref={this.setTargetElementRef.bind(this)}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

Parallax.defaultProps = {
  triggerHook: 1,
  duration: '100%',
  ease: Linear.easeNone,
}

export default Parallax;
