import './Hero.scss';
import React from 'react';
import classNames from 'classnames';
import DotLight from '../Dots/dot-light.svg';
import HeroVideo from './HeroVideo';
import Fade from '../../Effects/Fade';
import {defer} from 'underscore';

class Hero extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      supportsAutoplay: false,
      isLoaded: false,
    }

    this.setIsLoaded = this.setIsLoaded.bind(this);
  }
  setIsLoaded() {
    if (!this.props.image) {
      defer(() => {
        this.setState({
          isLoaded: true
        })
      })
    }

    this.setState({
      isLoaded: true
    })
  }
  renderTitleLineOne() {
    const {titleLineOne} = this.props;

    if (!titleLineOne) {
      return null;
    }

    return (
      <h1 className="hero-title-one">
        {titleLineOne}
      </h1>
    )
  }
  renderTitleLineTwo() {
    const {titleLineTwo} = this.props;

    if (!titleLineTwo) {
      return null
    }

    return (
      <h1 className="hero-title-two">
        {titleLineTwo}
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
            backgroundImage: `url(${DotLight}), linear-gradient(90deg, rgba(33, 38, 45, 0.85) 25%, rgba(33, 38, 45, 0.35))`
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
            <div className="hero__content_container-inner">
              {children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero;
