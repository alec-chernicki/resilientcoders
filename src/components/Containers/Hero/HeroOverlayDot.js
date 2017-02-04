import React, { PropTypes } from 'react';
import {Layer, Rect, Stage, Group} from 'react-konva';

class HeroOverlayBox extends React.Component {
  constructor(props) {
    super(props)

    this.setElementRef = this.setElementRef.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  handleMouseEnter() {
    console.log('entered');
    if (!this.rectangleEl) {
      return
    }

    this.rectangleEl.to({
      opacity: 0.5,
      duration: 0.15
    })
  }
  handleMouseLeave() {
    if (!this.rectangleEl) {
      return
    }

    this.rectangleEl.to({
      opacity: 0,
      duration: 0.15
    })
  }
  setElementRef(el) {
    this.rectangleEl = el;
  }
  render() {
    const {height, width, squareSideWidth, x, y} = this.props;

    return (
      <Rect
        x={x} y={y}
        width={squareSideWidth}
        height={squareSideWidth}
        fill={'#FFF'}
        opacity={0.}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        ref={this.setElementRef}
      />
    )
  }
}

export default HeroOverlayBox;
