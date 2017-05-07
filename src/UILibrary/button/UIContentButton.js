import React, { PropTypes } from 'react';
import styles from './UIContentButton.css';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import UIImage from 'UILibrary/image/UIImage';

class UIContentButton extends React.Component {
  renderText() {
    const { text } = this.props;

    if (!text) {
      return null;
    }

    return (
      <p className="m-top-3">
        {text}
      </p>
    );
  }
  render () {
    const { image, title, className } = this.props;
    const contentButtonClass = classNames(className, 'with-shadow');

    return (
      <div styleName="content-button" className={contentButtonClass}>
        <div styleName="image">
          <UIImage
            type="cover"
            src={image}
          />
        </div>
        <div styleName="content" className="p-all-3">
          <h2 className="m-y-0">
            {title}
          </h2>
          <div className="divider m-top-2 m-bottom-0" />
          {this.renderText()}
        </div>
      </div>
    );
  }
}

UIContentButton.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default CSSModules(UIContentButton, styles);
