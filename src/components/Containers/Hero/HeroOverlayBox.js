import React, { PropTypes } from 'react';
import {Layer, Rect, Stage, Group} from 'react-konva';
import tweenState from 'react-tween-state';

const HeroOverlayBox = React.createClass({
  mixins: [tweenState.Mixin],
  getInitialState(props) {
    return ({
      opacity: 0
    })
  },
  componentWillUnmount() {
    this.tweenState = null;
    this.rectangleEl = null;
  },
  handleMouseEnter() {
    if (!this.rectangleEl) {
      return
    }
    this.tweenState('opacity', {
      easing: tweenState.easingTypes.easeInOutQuad,
      duration: 0,
      endValue: 0.05
    });
  },
  handleMouseLeave() {
    if (!this.rectangleEl) {
      return
    }

    this.tweenState('opacity', {
      easing: tweenState.easingTypes.easeInOutQuad,
      duration: 350,
      endValue: 0
    });
  },
  setElementRef(el) {
    this.rectangleEl = el;
  },
  render() {
    const {height, width, squareSideWidth, x, y} = this.props;

    return (
      <Rect
        x={x} y={y}
        width={squareSideWidth}
        height={squareSideWidth}
        fill={'#FFF'}
        opacity={this.getTweeningValue('opacity')}
        onMouseOver={this.handleMouseEnter}
        onMouseOut={this.handleMouseLeave}
        ref={this.setElementRef}
      />
    )
  }
})

export default HeroOverlayBox;
