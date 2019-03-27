import React from 'react';
import PropTypes from 'prop-types';
import styles from './UIHero.css';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
import UILayer from 'UILibrary/layer/UILayer';
import UISection from 'UILibrary/layout/UISection';
import UIButton from 'UILibrary/button/UIButton';
import UIVideoLayer from 'UILibrary/layer/UIVideoLayer';
import TimelineMax from 'TimelineMax';
import TweenMax from 'TweenMax';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

class UIHero extends React.Component {
  componentDidMount() {
    const tweenOne = TweenMax.from('.animated-character', 0.65, {opacity: 0, x: -30, ease: Linear.easeNone});
    const tweenTwo = TweenMax.from('.hero-divider', 0.25, {width: 0, ease: Linear.easeNone});
    const tweenThree = TweenMax.from('.hero-text', 0.25, {opacity: 0, y: 20, ease: Linear.easeNone});
    const tweenFour = TweenMax.from('.hero-button', 0.25, {opacity: 0, y: 20, ease: Linear.easeNone});

    const heroContentTimeline = new TimelineMax({paused: true})
      .add([tweenOne, tweenTwo, tweenThree, tweenFour], 0.05, 'sequence', 0);

    this.tlTween = heroContentTimeline.tweenFromTo(
      0,
      heroContentTimeline.duration(),
      {
        ease: Power1.easeOut,
        paused: true,
        delay: 0.65
      }
    );

    this.tlTween.play();
  }
  componentWillUnmount() {
    this.tlTween.pause();
    this.tlTween = null;
  }
  getTotalCharacterLength() {
    const { titleOne, titleTwo } = this.props;

    if (!titleTwo) {
      return Number(titleOne.length);
    }

    return Number(titleOne.length) + Number(titleTwo.length)
  }
  getWrappedText(text) {
    return text.split('').map((character, key) => {
      return (
        <span styleName="animated-character-wrapper" key={key}>
          <span className="animated-character display-inline-block">
            {character}
          </span>
        </span>
      );
    });
  }
  getWrappedWords(text) {
    const words = text.split(' ');

    return words.map((word, key) => {
      return (
        <span
          key={key}
          styleName="title-word"
        >
          {this.getWrappedText(word)}
        </span>
      );
    })
  }
  renderBackground() {
    const {video, image} = this.props;

    if (video) {
      return (
        <UIVideoLayer src={video} className="index-1" />
      );
    }

    if (image) {
      return (
        <UILayer image={image} className="index-1" />
      );
    }
  }
  renderTitleOne() {
    const {titleOne} = this.props;

    if (!titleOne) {
      return null;
    }

    return (
      <h1 className="m-all-0">
        {this.getWrappedWords(titleOne)}
      </h1>
    )
  }
  renderTitleTwo() {
    const {titleTwo} = this.props;

    if (!titleTwo) {
      return null
    }

    return (
      <h1 className="m-all-0">
        {this.getWrappedWords(titleTwo)}
      </h1>
    );
  }
  renderText() {
    const {text} = this.props;

    if (!text) {
      return null
    }

    return (
      <div>
        <div className="divider hero-divider" />
        <p className="text-on-dark hero-text text-constrained">
          {text}
        </p>
      </div>
    );
  }
  renderButton() {
    const { to, href, buttonText } = this.props;

    if (!to && !href)  {
      return null;
    }

    return (
      <UIButton className="hero-button" to={to} href={href}>
        {buttonText}
      </UIButton>
    );
  }
  render () {
    const { isFullHeight } = this.props;

    const heroClass = classNames({
      'default': !isFullHeight,
      'full-height': isFullHeight,
    });

    return (
      <div styleName={heroClass} className="hero">
        {this.renderBackground()}
        <div styleName="content" className="index-2">
          <UISection className="p-x-6">
            {this.renderTitleOne()}
            {this.renderTitleTwo()}
            {this.renderText()}
            {this.renderButton()}
          </UISection>
        </div>
      </div>
    )
  }
}

UIHero.defaultProps = {
  isFullHeight: false,
};

UIHero.propTypes = {
  isFullHeight: PropTypes.bool,
  image: PropTypes.string,
  titleOne: PropTypes.string.isRequired,
  titleTwo: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
}

export default CSSModules(UIHero, styles);
