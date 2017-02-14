import './ConnectingDot.scss';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';;
import React from 'react'

const dotController = new ScrollMagic.Controller();

class ConnectingDot extends React.Component {
  componentDidMount() {
    if (!this.triggerElement || !this.targetElement) {
      return
    }

    this.scene = new ScrollMagic
      .Scene({ offset: 0, triggerHook: 0.4 })
      .setClassToggle(this.targetElement, 'active')
      .addTo(dotController)
      .triggerElement(this.triggerElement)

    this.sceneTwo = new ScrollMagic
      .Scene({ offset: 0, triggerHook: 0.4 })
      .setClassToggle(this.targetElement, 'pulsing')
      .addTo(dotController)
      .triggerElement(this.triggerElement)
  }
  setTargetElementRef(element) {
    this.targetElement = element;
  }
  setTriggerElementRef(element) {
    this.triggerElement = element;
  }
  componentWillUnmount() {
    this.scene.destroy(true);
    this.scene = null;

    this.sceneTwo.destroy(true);
    this.sceneTwo = null;
  }
  render() {
    return (
      <div ref={this.setTriggerElementRef.bind(this)}>
        <div
          className="dot-with-circle"
          ref={this.setTargetElementRef.bind(this)}
        >
          <div className="dot-pulse"/>
        </div>
      </div>
    )
  }
}

export default ConnectingDot;
