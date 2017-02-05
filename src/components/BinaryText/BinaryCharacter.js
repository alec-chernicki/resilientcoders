import React, {PropTypes, Component} from 'react';
import classNames from 'classnames';

const TIME_BETWEEN_ANIMATIONS = 70
const MINIMUM_ANIMATION_OFFSET = 1000
const MAXIMUM_ANIMATION_OFFSET = 100

class BinaryCharacter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timesToAnimate: 3,
      currentAnimationState: 0,
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
        const {currentAnimationState} = this.state;

        if (currentAnimationState === 2) {
          clearInterval(this.animationInterval);
        }

        this.setState({
          currentAnimationState: currentAnimationState + 1
        });

      }, TIME_BETWEEN_ANIMATIONS);
    }, this.animationOffset);
  }
  render() {
    const letterClass = classNames(
      "binary-text__letter",
      `state-${this.state.currentAnimationState}`, {
        "binary-text__letter--inverted": this.props.isInverted === true
      }
    );

    return (
      <span className={letterClass} style={{position: 'relative', display: 'inline-block'}}>
        {this.props.text}
      </span>
    );
  }
}

BinaryCharacter.propTypes = {
  characterIndex: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

export default BinaryCharacter;
