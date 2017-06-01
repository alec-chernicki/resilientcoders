import { partial } from 'underscore';
import React, { PropTypes } from 'react';
import styles from './UIContentButton.css';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import UIImage from 'UILibrary/image/UIImage';
import UIOverlay from 'UILibrary/overlay/UIOverlay';

const useProps = {
  'primary': 'primary',
  'secondary': 'secondary'
}

class UIContentButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
    };

    this.setIsHovered = this.setIsHovered.bind(this);
  }
  setIsHovered(isHovered) {
    this.setState({ isHovered });
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
    const { image, className, use } = this.props;
    const { isHovered } = this.state;
    const contentButtonClass = classNames(className, 'with-shadow');

    const contentClass = classNames(className, {
      'primary': use === useProps.primary,
      'secondary': use === useProps.secondary,
    });

    return (
      <div
        onMouseEnter={partial(this.setIsHovered, true)}
        onMouseLeave={partial(this.setIsHovered, false)}
        styleName="content-button"
        className={contentButtonClass}
      >
        <div styleName="image">
          <UIOverlay
            isActive={isHovered}
            text="Learn more"
          />
          <UIImage
            type="cover"
            src={image}
          />
        </div>
        <div styleName={contentClass} className="p-all-3">
          {this.renderTitle()}
          {this.renderText()}
        </div>
      </div>
    );
  }
}

UIContentButton.defaultProps = {
  use: useProps.primary
};

UIContentButton.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  use: PropTypes.string,
};

export default CSSModules(UIContentButton, styles);
