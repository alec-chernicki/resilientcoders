import React, {PropTypes, Component} from 'react'

const ANIMATION_TIME = 85

const ANIMATION_CLASSES = [
  
]

class BinaryCharacter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: Math.random() > 0.5 ? 0 : 1,
      timesToAnimate: 3,
      shownCharacter: '',
      animationCompleted: false
    };
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
        const number = this.state.number === 1 ? 0 : 1;
        const {timesToAnimate} = this.state;

        this.setState({number, shownCharacter: number});

        if (timesToAnimate === 0) {
          clearInterval(this.animationInterval);
          this.setState({shownCharacter: this.props.text, animationCompleted: true});
        }

        this.setState({
          timesToAnimate: timesToAnimate - 1
        });

      }, ANIMATION_TIME);
    }, this.props.characterIndex * 100);
  }
  render() {
    return (
      <span className="binary-text__letter">
        {this.state.shownCharacter}
      </span>
    );
  }
}

BinaryCharacter.propTypes = {
  characterIndex: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

export default BinaryCharacter;
