import React, { PropTypes } from 'react';
import styles from './UIHero.css';
import CSSModules from 'react-css-modules';
import UILayer from 'UILibrary/layer/UILayer';
import UISection from 'UILibrary/layout/UISection';
import UIButton from 'UILibrary/button/UIButton';
import UIVideoLayer from 'UILibrary/layer/UIVideoLayer';

class UIHero extends React.Component {
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
      <h1>
        {titleOne}
      </h1>
    )
  }
  renderTitleTwo() {
    const {titleTwo} = this.props;

    if (!titleTwo) {
      return null
    }

    return (
      <h1>
        {titleTwo}
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
        <div className="divider" />
        <p className="text-on-dark text-constrained">
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
      <UIButton to={to} href={href}>
        {buttonText}
      </UIButton>
    );
  }
  render () {
    return (
      <div styleName="hero">
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

UIHero.propTypes = {
  image: PropTypes.string,
  titleOne: PropTypes.string.isRequired,
  titleTwo: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
}

export default CSSModules(UIHero, styles);
