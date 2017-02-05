import './BinaryText.scss';
import React, {PropTypes, Component} from 'react';
import ScrollMagic from 'scrollmagic';
import BinaryCharacter from './BinaryCharacter';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import TimelineMax from 'TimelineMax';

class BinaryText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldAnimate: false,
      hasAnimated: false
    };

    this.controller = new ScrollMagic.Controller();
    this.tl = new TimelineMax();
  }
  componentDidMount() {
    this.initializeScene();

  }
  componentWillUnmount() {
    this.scene.destroy(true)
    this.scene = null;
  }
  initializeScene() {
    if (!this.triggerElement || !this.targetElement) {
      return
    }

    this.scene = new ScrollMagic
      .Scene({offset: 0, triggerHook: 0.5})
      .addTo(this.controller)
      .triggerElement(this.triggerElement)

    this.scene.on('start', this.setHasStartedAnimation.bind(this))
  }
  setHasStartedAnimation() {
    if (this.state.hasAnimated) {
      return;
    }

    this.setState({shouldAnimate: true, hasAnimated: true})
  }
  setTargetElementRef(element) {
    this.targetElement = element;
  }
  setTriggerElementRef(element) {
    this.triggerElement = element;
  }
  renderIfValid() {
    if (!this.state.shouldAnimate && !this.state.hasAnimated) {
      return null;
    }

    return this.renderWrappedText();
  }
  renderWrappedText() {
    const originalLetters = this.props.children.split('');
    const wrappedLetters = originalLetters.map((letter, i) => (
      <BinaryCharacter
        key={i}
        text={letter}
        characterIndex={i}
      />
    ));
    return wrappedLetters;
  }
  render() {
    return (
      <div
        ref={this.setTriggerElementRef.bind(this)}
        className="binary-text binary-text-outer"
      >
        <div className="binary-text-inner" ref={this.setTargetElementRef.bind(this)}>
          {this.renderIfValid()}
        </div>
      </div>
    );
  }
}

BinaryText.propTypes = {
  children: PropTypes.string.isRequired
};

export default BinaryText;
