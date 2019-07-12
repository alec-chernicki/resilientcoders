import styles from './UIInformationCarousel.css';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
import React, { PropTypes } from 'react';
import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';
import UICard from 'UILibrary/layout/UICard';
import UIImage from 'UILibrary/image/UIImage';
import UIButton from 'UILibrary/button/UIButton';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const MARGIN_FACTOR = 4;

const animationDirections = {
  'up': 'up',
  'down': 'down',
  'left': 'left',
  'right': 'right'
};

const animationAxes = {
  'vertical': 'vertical',
  'horizontal': 'horizontal'
};

class UIInformationCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contentContainerHeight: 0,
    };

    this.setContentContainerHeight = this.setContentContainerHeight.bind(this);
    this.previousIndex = props.currentIndex;
  }
  getCurrentItem() {
    const { config, currentIndex } = this.props;

    return config[currentIndex];
  }

  getAnimationDirection() {
    const { animationAxis } = this.props;
    const { currentIndex } = this.props;
    const isHigher = currentIndex >= this.previousIndex;
    this.previousIndex = currentIndex;

    if (animationAxis === animationAxes.vertical) {
      if (isHigher) {
        return animationDirections.down;
      }

      return animationDirections.up;
    }

    if (isHigher) {
      return animationDirections.right;
    }

    return animationDirections.left;
  }
  getTextHeight() {
    if (!this.textRef) {
      return 0;
    }
    return this.textRef.clientHeight;
  }
  setContentContainerHeight(el) {
    if (!el) {
      return;
    }

    const marginSpacing = (10 * MARGIN_FACTOR) * 2;

    this.setState({
      contentContainerHeight: el.clientHeight + marginSpacing,
    });
  }
  renderTitle() {
    const { title } = this.getCurrentItem();

    if(!title) {
      return null;
    }

    return (
      <h2>{title}</h2>
    );
  }
  renderText() {
    const { text } = this.getCurrentItem();

    if(!text) {
      return null;
    }

    return (
      <p>
        {text}
      </p>
    );
  }
  renderButton() {
    const { link } = this.getCurrentItem();
    console.log(link)

    if(!link) {
      return null;
    }

    if (typeof link === 'object') {
      if (link.component) {
        let ButtonComponent = link.component;
        return (
          <ButtonComponent />
        );
      }
      return (
      <UIButton to={link.url}>
          { link.text ? `${link.text}` : `Learn More` }
      </UIButton>
      );
    }

    return (
      <UIButton to={link}>
        Learn More
      </UIButton>
    );
  }
  renderContent() {
    const animationDirection = this.getAnimationDirection();
    const { text } = this.getCurrentItem();
    const { contentContainerHeight } = this.state;
    const { styles } = this.props;
    const contentClass = classNames('p-all-6', 'overflow-hidden', styles['content-container']);

    return (
      <UICard
        className={contentClass}
        style={{ height: contentContainerHeight }}
      >
        <CSSTransitionGroup
          transitionName={{
            enter: styles[`text-enter-${animationDirection}`],
            enterActive: styles[`text-enter-active-${animationDirection}`],
            leave: styles[`text-leave-${animationDirection}`],
            leaveActive: styles[`text-leave-active-${animationDirection}`],
          }}
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
        >
          <div key={text} styleName="text-container">
            <div ref={this.setContentContainerHeight} className={`m-all-${MARGIN_FACTOR}`}>
              {this.renderTitle()}
              {this.renderText()}
              {this.renderButton()}
            </div>
          </div>
        </CSSTransitionGroup>
      </UICard>
    )
  }
  renderImage() {
    const { styles } = this.props;
    const { image } = this.getCurrentItem();

    return (
      <CSSTransitionGroup
        transitionName={{
          enter: styles[`image-enter`],
          enterActive: styles[`image-enter-active`],
          leave: styles[`image-leave`],
          leaveActive: styles[`image-leave-active`],
        }}
        transitionEnterTimeout={400}
        transitionLeaveTimeout={400}
      >
        <UIImage
          key={image}
          type="cover"
          src={image}
        />
      </CSSTransitionGroup>
    );
  }
  render () {
    const { className } = this.props;
    return (
      <UIFlexRow className={className}>
        <UIFlex className="overflow-hidden" styleName="image-container">
          {this.renderImage()}
        </UIFlex>
        <UIFlex>
          {this.renderContent()}
        </UIFlex>
      </UIFlexRow>
    )
  }
}

UIInformationCarousel.defaultProps = {
  currentIndex: 0,
  animationDirection: animationAxes.vertical
};

UIInformationCarousel.propTypes = {
  config: PropTypes.array.isRequired,
  currentIndex: PropTypes.number.isRequired,
  animationAxis: PropTypes.oneOf(Object.keys(animationAxes)),
};

export default CSSModules(UIInformationCarousel, styles);
