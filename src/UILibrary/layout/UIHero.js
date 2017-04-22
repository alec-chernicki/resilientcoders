import React, { PropTypes } from 'react';
import styles from './UIHero.css';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import UILayer from 'UILibrary/layer/UILayer';

class UIHero extends React.Component {
  renderTitleOne() {
    const {titleLineOne} = this.props;

    if (!titleLineOne) {
      return null;
    }

    return (
      <h1>
        {titleLineOne}
      </h1>
    )
  }
  renderTitleTwo() {
    const {titleLineTwo} = this.props;

    if (!titleLineTwo) {
      return null
    }

    return (
      <h1>
        {titleLineTwo}
      </h1>
    )
  }
  render () {
    const { image, children, titleOne, titleTwo } = this.props;

    return (
      <div styleName="hero">
        <UILayer image={image} />
        <div styleName="content">
          {this.renderTitleLineOne()}
          {this.renderTitleLineTwo()}
          {this.renderText()}
        </div>
      </div>
    )
  }
}

UIHero.defaultProps = {
  use: useProps.primary
};

UIHero.propTypes = {
  use: PropTypes.oneOf(Object.keys(useProps)),
};

export default CSSModules(UIHero, styles);
