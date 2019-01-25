import React, { PropTypes } from 'react';
import styles from './UIContentCardButton.css';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import UIIcon from 'UILibrary/icon/UIIcon';
import icons from 'constants/icons';

const useProps = {
  'primary': 'primary',
  'secondary': 'secondary'
}

class UIContentCardButton extends React.Component {
  getIcon() {
    const { use } = this.props;

    return use === useProps.primary ? icons.rightArrowDark : icons.rightArrow;
  }
  renderText() {
    const { text } = this.props;

    if (!text) {
      return null;
    }

    return (
      <div>
        <div className="divider m-top-2 m-bottom-0" />
        <p className="m-top-3">
          {text}
        </p>
      </div>
    );
  }
  renderTitle() {
    const { use, title } = this.props;

    if (use === useProps.primary) {
      return <h2 className="m-all-0">{title}</h2>
    }

    return <h3 className="m-all-0">{title}</h3>
  }
  render () {
    const { className, use, buttonText } = this.props;
    const contentButtonClass = classNames(className, 'with-shadow');

    const contentClass = classNames(className, {
      'primary': use === useProps.primary,
      'secondary': use === useProps.secondary,
    });

    const infoClass = classNames(className, {
      'primary-info': use === useProps.primary,
      'secondary-info': use === useProps.secondary,
    });

    return (
      <div
        styleName="content-button"
        className={contentButtonClass}
      >
        <div styleName={contentClass} className="p-all-3">
          {this.renderTitle()}
          {this.renderText()}
        </div>
        <div styleName={infoClass} className="p-x-3">
          <p className="bold" styleName="info-text">
            <span>
              { buttonText ? buttonText : 'Learn more'}
            </span>
            <UIIcon
              className="m-left-1"
              align="middle"
              height={15}
              image={this.getIcon()}
            />
          </p>
        </div>
      </div>
    );
  }
}

UIContentCardButton.defaultProps = {
  use: useProps.primary
};

UIContentCardButton.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  use: PropTypes.string,
};

export default CSSModules(UIContentCardButton, styles);
