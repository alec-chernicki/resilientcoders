import './BinaryText.scss';
import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';

class Character extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: Math.random() > 0.5 ? 0 : 1,
      timesToAnimate: 3,
      shownCharacter: '',
      animationCompleted: false,
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
    const animationTime = 75;

    this.timeout = setTimeout(() => {
      this.animationInterval = setInterval(() => {
        const number = this.state.number === 1 ? 0 : 1;
        const { timesToAnimate } = this.state;

        this.setState({
          number,
          shownCharacter: number,
        });

        if (timesToAnimate === 0) {
          clearInterval(this.animationInterval);
          this.setState({
            shownCharacter: this.props.text,
            animationCompleted: true,
          });
        }

        this.setState({
          timesToAnimate: timesToAnimate - 1,
        });

      }, animationTime);
    }, this.props.characterIndex * 100);
  }
  render() {
    return (
      <span className="letter">{this.state.shownCharacter}</span>
    );
  }
}

Character.propTypes = {
  characterIndex: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

class BinaryText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      hasBeenShown: false,
    };
  }
  componentDidMount() {
    this.isScrolledIntoView();
    // FIXME: This needs to be refacotred into a listener on scroll event
    this.intervalMain = setInterval(this.isScrolledIntoView.bind(this), 100);
  }
  componentWillUnmount() {
    clearInterval(this.intervalMain);
    clearInterval(this.interval);
  }
  componentDidUpdate() {
  }
  isScrolledIntoView() {
    if (!this.el) {
      return false;
    }
    const elemTop = this.el.getBoundingClientRect().top;
    const elemBottom = this.el.getBoundingClientRect().bottom;
    const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight * 1.2);

    if (!this.state.hasBeenShown) {
      this.setState({ isVisible });
    }

    return isVisible;
  }
  renderIfValid() {
    if (!this.state.isVisible && !this.state.hasBeenShown) {
      return null;
    }
    return this.renderWrappedText();
  }
  renderWrappedText() {
    const originalLetters = this.props.children.split('');
    const wrappedLetters = originalLetters.map((letter, i) => (
      <Character text={letter} key={i} characterIndex={i} />
    ));
    return wrappedLetters;
  }
  render() {
    return (
      <div ref={(ref) => this.el = ref} >
        {this.renderIfValid()}
      </div>
    );
  }
}

BinaryText.propTypes = {
  children: PropTypes.string.isRequired,
};

export default BinaryText;
