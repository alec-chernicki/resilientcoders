import './Hero.scss';
import React, { PropTypes } from 'react';
import {Layer, Rect, Stage, Group, Circle} from 'react-konva';
import {Layer as KonvaLayer, Circle as KonvaCircle} from 'konva';
import HeroOverlayBox from './HeroOverlayBox';
import HeroOverlayDot from './HeroOverlayDot';
import {memoize, defer, debounce} from 'underscore';

const SQUARES_HORIZONTAL = 13
const SQUARES_VERTICAL = 7
const dotArray = [];

const _getSquareSideWidth = () => {
  return window.innerWidth / SQUARES_HORIZONTAL;
}

const _getSquareGrid = memoize(() => {
  let squares = [];
  const width = _getSquareSideWidth();
  for(let i = 0; i < SQUARES_VERTICAL; i++) {
    for(let k = 0; k < SQUARES_HORIZONTAL; k++) {
      const x = (width) * k;
      const y = (width) * i;

      squares.push(
        <HeroOverlayBox
          key={Math.random()}
          x={x + 1}
          y={y + 1}
          squareSideWidth={width - 2}
        />
      )
    }
  }
  return squares;
})

const _dots = [];


class HeroOverlay extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      squareSideWidth: _getSquareSideWidth(),
    }
    this.setDotCanvasRef = this.setDotCanvasRef.bind(this);
  }
  setDotCanvasRef(el) {
    this.dotCanvas = el;
    console.log(el);
  }
  renderGradient() {
    return (
      <Rect
        height={window.innerHeight}
        width={window.innerWidth}
        fillLinearGradientStartPoint={{x: 0, y: 0}}
        fillLinearGradientEndPoint={{x: window.innerWidth, y: 0}}
        fillLinearGradientColorStops={[0, '#21262D', 1, 'transparent']}
      />
    )
  }
  renderDots() {
    let dots = [];
    const {offsetX, offsetY} = this.state;

    for(let i = 0; i < SQUARES_VERTICAL * 4; i++) {
      for(let k = 0; k < SQUARES_HORIZONTAL* 4; k++) {
        const x = (_getSquareSideWidth() / 4) * k;
        const y = (_getSquareSideWidth() /4 ) * i;

        dots.push(
          <HeroOverlayDot
            key={Math.random()}
            x={x}
            y={y}
          />
        )
      }
    }
    return dots
  }
  renderSquares() {
    return _getSquareGrid();
  }
  render () {
    return (
      <div className="hero__overlay">
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          ref={this.setDotCanvasRef}
        >
          <Layer>
            {this.renderGradient()}
          </Layer>
          <Layer>
            {this.renderDots()}
          </Layer>
          <Layer>
            {this.renderSquares()}
          </Layer>
        </Stage>
      </div>
    )
  }
}

export default HeroOverlay;
