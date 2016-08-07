import './HalfPanels.scss';
import React, { PropTypes } from 'react'
import ScrollMagic from 'scrollmagic';
import NumberAnimation from './NumberAnimation';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

class HalfPanels extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      hasStartedAnimation: false,
    };
  }
  componentWillMount () {
    this.controller = new ScrollMagic.Controller();
  }
  componentDidMount () {
    if (!this.triggerElement || !this.targetElement) {
      return
    }

    this.scene = new ScrollMagic.Scene({
        offset: 0,
        triggerHook: 0.5,
    })
      .setClassToggle(this.targetElement, 'active')
      .addTo(this.controller)
      .triggerElement(this.triggerElement)

    this.scene.on('start', this.setHasStartedAnimation.bind(this))
    this.scene.on('leave', this.setHasEndedAnimation.bind(this))
  }
  componentWillUnmount() {
    this.scene.destroy(true)
    this.scene = null;
  }
  getHasStartedAnimation () {
    return this.state.hasStartedAnimation;
  }
  setHasStartedAnimation () {
    console.log('started');
    this.setState({
      hasStartedAnimation: true
    })
  }
  setHasEndedAnimation () {
    console.log('ended');
    this.setState({
      hasStartedAnimation: false
    })
  }
  setTargetElementRef (element) {
    this.targetElement = element;
  }
  setTriggerElementRef (element) {
    this.triggerElement = element;
  }
  render () {
    return (
      <div ref={this.setTriggerElementRef.bind(this)}>
        <div className="panel-container" ref={this.setTargetElementRef.bind(this)}>
          <div className="panel-visibility-container">
            <div className="panel-item panel-left">
              <h2>
                <span className="panel-number">
                  <NumberAnimation
                    value={0}
                    shouldAnimate={this.getHasStartedAnimation.bind(this)}
                  />
                  %
                </span>
                WRITE-OFF
              </h2>
            </div>
          </div>
          <div className="panel-visibility-container">
            <div className="panel-item panel-right">
              <h2>
                <span className="panel-number">
                  <NumberAnimation
                    value={0}
                    shouldAnimate={this.getHasStartedAnimation.bind(this)}
                  />
                  %
                </span>
                GET SHIT DONE
              </h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HalfPanels;
