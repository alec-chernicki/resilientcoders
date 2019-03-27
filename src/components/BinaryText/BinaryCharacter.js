import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './BinaryCharacter.css';

const TIMES_TO_ANIMATE = 3;
const TIME_BETWEEN_ANIMATIONS = 80
const MINIMUM_ANIMATION_OFFSET = 1000
const MAXIMUM_ANIMATION_OFFSET = 100

const animationStates = {
  'FIRST': 'binary-first',
  'SECOND': 'binary-second',
  'THIRD': 'binary-third',
  'FOURTH': 'binary-fourth',
  'FINAL': 'binary-final',
};

const animationKeys = Object.keys(animationStates);

class BinaryCharacter extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      timesToAnimate: TIMES_TO_ANIMATE,
      currentAnimationIndex: 0,
    };

    this.animationOffset = Math.floor(Math.random()*(MAXIMUM_ANIMATION_OFFSET-MINIMUM_ANIMATION_OFFSET+1)+MINIMUM_ANIMATION_OFFSET);
  }
  componentDidMount() {
    this.animateCharacter();
  }
  componentWillUnmount() {
    clearInterval(this.animationInterval);
    clearTimeout(this.timeout);
  }
  animateCharacter() {
    this.timeout = setTimeout(() => {
      this.animationInterval = setInterval(() => {
        const {currentAnimationIndex} = this.state;

        if (currentAnimationIndex === animationKeys.length - 1) {
          clearInterval(this.animationInterval);
          return
        }
        debugger
        this.setState({
          currentAnimationIndex: currentAnimationIndex + 1
        });

      }, TIME_BETWEEN_ANIMATIONS);
    }, this.animationOffset);
  }
  render() {
    const { currentAnimationIndex } = this.state;
    const currentAnimationKey = animationKeys[currentAnimationIndex];
    const letterClass = [animationStates[currentAnimationKey]];

    return (
      <span
        styleName={letterClass}
      >
        {this.props.text}
      </span>
    );
  }
}

BinaryCharacter.propTypes = {
  text: PropTypes.string.isRequired
};

export default CSSModules(BinaryCharacter, styles);
