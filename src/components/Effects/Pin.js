/* eslint-disable */
import ScrollMagic from 'scrollmagic';
import React from 'react'
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

class Pin extends React.PureComponent {
  componentWillMount() {
    this.controller = new ScrollMagic.Controller();
  }
  componentDidMount() {
    if (!this.triggerElement || (!this.targetElement || this.props.triggerRef)) {
      return
    }
    this.initializeScene();
    window.addEventListener('resize', this.handleResize);
  }
  componentWillUnmount() {
    this.scene.destroy(true)
    this.scene = null;
  }
  componentDidUpdate() {
    if (!this.scene) {
      return
    }

    this.scene.duration(this.getDuration());
  }
  initializeScene() {
    this.scene = new ScrollMagic
      .Scene({duration: this.getDuration(), triggerHook: 0, offset: this.props.offset})
      .setPin(this.targetElement)
      .triggerElement(this.props.triggerRef || this.triggerElement)
      .addTo(this.controller)
  }
  handleResize() {
    if (!this.scene) return
    this.scene.duration(this.getDuration());
  }
  getDuration() {
    const {duration} = this.props;
    const triggerHeight = this.triggerElement.clientHeight

    return duration || triggerHeight - (window.innerHeight)
  }
  setTriggerElementRef(element) {
    this.triggerElement = element;
  }
  setTargetElementRef(element) {
    this.targetElement = element;
  }
  render() {
    const {triggerRef} = this.props;
    const stretchToFit = {
      'stretch-to-fit': !!this.props.stretch
    }
    const outerClassName = classNames(this.props.className, this.props.outerClassName, stretchToFit)
    const innerClassName = classNames(this.props.className, this.props.innerClassName, stretchToFit);

    if(triggerRef)
      return (
        <div
          className={innerClassName}
          ref={this.setTargetElementRef.bind(this)}
        >
          {this.props.children}
        </div>
      );

    return (
      <div
        ref={this.setTriggerElementRef.bind(this)}
        className={outerClassName}
      >
        <div
          className={innerClassName}
          ref={this.setTargetElementRef.bind(this)}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

Pin.defaultProps = {
  stretch: true,
  offset: 0
}

export default Pin;
