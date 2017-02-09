import './Hero.scss';
import React from 'react';
import classNames from 'classnames';
import DotLight from '../Dots/dot-light.svg';
import BinaryText from '../../BinaryText/BinaryText';
import HeroVideo from './HeroVideo';
import Fade from '../../Effects/Fade';
import {defer} from 'underscore';

class Hero extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      supportsAutoplay: false,
      isLoaded: false,
    }

    this.setIsLoaded = this.setIsLoaded.bind(this);
  }
  setIsLoaded() {
    defer(() => {
      this.setState({
        isLoaded: true
      })
    })
  }
  renderTitleLineOne() {
    const {isLoaded} = this.state;
    const {titleLineOne} = this.props;

    if (!titleLineOne || !isLoaded) return null

    return (
      <h1 className="hero-title-one">
        <BinaryText>
          {titleLineOne}
        </BinaryText>
      </h1>
    )
  }
  renderTitleLineTwo() {
    const {isLoaded} = this.state;
    const {titleLineTwo} = this.props;

    if (!titleLineTwo || !isLoaded) return null

    return (
      <h1 className="hero-title-two">
        <BinaryText>
          {titleLineTwo}
        </BinaryText>
      </h1>
    )
  }
  renderImageContent() {
    const {image} = this.props;
    const imageClass = classNames('hero__image-wrapper', {
      'loaded': this.state.isLoaded
    })

    if (image) {
      return (
        <div className={imageClass}>
          <img
            className="hero__image"
            src={image}
            onLoad={this.setIsLoaded}
            role="presentation"
          />
        </div>
      )
    }
    else {
      return (
        <div className={imageClass}>
          <HeroVideo onLoad={this.setIsLoaded}/>
        </div>
      )
    }
  }
  render () {
    const {children, className, centered, short} = this.props;

    const heroClass = classNames('hero', className, {
      'hero--short': short === true
    });

    const heroContentClass = classNames('hero__content', {
      'hero__content--centered': centered,
    });

    return (
      <div className={heroClass}>
        <div
          className="hero__overlay"
          style={{
            backgroundImage: `url(${DotLight}), linear-gradient(90deg, rgba(33,38,45, 0.8) 30%, rgba(33,38,45, 0.45))`
          }}
        />
        <Fade from={0} to={1} stretch={true} className="hero__fade-overlay-container">
          <div className="hero__fade-overlay" />
        </Fade>
        {this.renderImageContent()}
        <div className="hero__content-container">
          <div className={heroContentClass}>
            {this.renderTitleLineOne()}
            {this.renderTitleLineTwo()}
            {children}
          </div>
        </div>
      </div>
    )
  }
}

export default Hero;
