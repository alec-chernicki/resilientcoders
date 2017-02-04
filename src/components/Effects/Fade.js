 /* eslint-disable */
import './Effects.scss';
import ScrollMagic from 'scrollmagic';
import {Power1} from 'gsap';
import TweenMax from 'TweenMax';
import TimelineMax from 'TimelineMax';
import React from 'react'
import ReactDOM from 'react-dom';
import classNames from 'classnames';

// TODO: Code duplication across effects components, this is something that would be cool to open source
// Would be best to make a base ES6 class or component to extend the scene functionality across components

class Fade extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.controller = new ScrollMagic.Controller();
  }
  componentDidMount() {
    if (!this.triggerElement || !this.targetElement) {
      return
    }

    const tween = new TimelineMax().add([TweenMax.fromTo(this.targetElement, 1, {
        opacity: this.props.from
      }, {
        opacity: this.props.to,
        ease: Power1.easeOut
      })]);

    this.scene = new ScrollMagic
      .Scene({duration: '100%', offset: 0, triggerHook: 0})
      .setTween(tween)
      .addTo(this.controller)
      .triggerElement(this.triggerElement)
  }
  componentWillUnmount() {
    this.scene.destroy(true)
    this.scene = null;
  }
  setTriggerElementRef(element) {
    this.triggerElement = element;
  }
  setTargetElementRef(element) {
    this.targetElement = element;
  }
  render() {
    const className = classNames('stretch-to-fit', this.props.className);

    return (
      <div
        ref={this.setTriggerElementRef.bind(this)}
        className={this.props.outerClassName}
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

export default Fade;
