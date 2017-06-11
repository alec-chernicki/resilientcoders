import React, {PropTypes, PureComponent} from 'react';
import styles from './BinaryText.css';
import CSSModules from 'react-css-modules';
import ScrollMagic from 'scrollmagic';
import BinaryCharacter from './BinaryCharacter';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import TimelineMax from 'TimelineMax';

class BinaryText extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      shouldAnimate: false
    };

    this.controller = new ScrollMagic.Controller();
    this.tl = new TimelineMax();
    this.renderWrappedWord = this.renderWrappedWord.bind(this)
    this.setHasStartedAnimation = this.setHasStartedAnimation.bind(this)
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
      .Scene({offset: 0, triggerHook: 0.9})
      .addTo(this.controller)
      .triggerElement(this.triggerElement)

    this.scene.on('start', this.setHasStartedAnimation);
  }
  setHasStartedAnimation() {
    this.setState({
      shouldAnimate: true
    });
  }
  setTargetElementRef(element) {
    this.targetElement = element;
  }
  setTriggerElementRef(element) {
    this.triggerElement = element;
  }
  renderIfValid() {
    if (!this.state.shouldAnimate) {
      return null;
    }

    return this.renderWrappedText();
  }
  renderWrappedWord(word, indexOuter) {
    const {isInverted} = this.props;

    const wrappedLetters = word.map((letter, indexInner) => (
      <BinaryCharacter
        key={indexInner}
        text={letter}
        isInverted={isInverted}
      />
    ));

    return (
      <div
        key={indexOuter}
        styleName="binary-word"
      >
        {wrappedLetters}
      </div>
    );
  }
  renderWrappedText() {
    const words = this.props.children.split(' ');
    const wordsIntoLetters = words.map(((word) => word.split('')));
    const wrappedWords = wordsIntoLetters.map(this.renderWrappedWord)

    return wrappedWords;
  }
  render() {
    return (
      <div ref={this.setTriggerElementRef.bind(this)}>
        <div
          styleName="binary-text"
          ref={this.setTargetElementRef.bind(this)}
        >
          {this.renderIfValid()}
        </div>
      </div>
    );
  }
}

BinaryText.propTypes = {
  children: PropTypes.string.isRequired,

};

export default CSSModules(BinaryText, styles);
