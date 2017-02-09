import './Effects.scss';
import ScrollMagic from 'scrollmagic';
import React from 'react'

class ToggleClass extends React.Component {
  componentWillMount() {
    this.controller = new ScrollMagic.Controller();
  }
  componentDidMount() {
    this.initializeScene();

    this.scene.on('enter', this.props.onEnter);
    this.scene.on('leave', this.props.onLeave);
    window.addEventListener('resize', this.handleResize);
  }
  initializeScene() {
    if (!this.triggerElement || !this.targetElement) {
      return
    }

    this.scene = new ScrollMagic
      .Scene({
        duration: this.getDuration(),
        offset: 0,
        triggerHook: this.props.triggerHook
      })
      .setClassToggle(this.targetElement, 'is-active')
      .addTo(this.controller)
      .triggerElement(this.triggerElement)
  }
  handleResize() {
    if (!this.scene) return
    this.scene.duration(this.getDuration());
  }
  getDuration() {
    if (this.props.duration === 'infinite') {
      return 0;
    }

    return this.props.duration || this.targetElement.clientHeight;
  }
  setTargetElementRef(element) {
    this.targetElement = element;
  }
  setTriggerElementRef(element) {
    this.triggerElement = element;
  }
  componentWillUnmount() {
    this.scene.destroy(true)
    this.scene = null;
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

export default ToggleClass;
