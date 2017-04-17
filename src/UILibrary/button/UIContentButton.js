import React, { PropTypes } from 'react';
import styles from './UIContentButton.css';
import CSSModules from 'react-css-modules';
import UILayer from 'UILibrary/layer/UILayer';
import UIButton from 'UILibrary/button/UIButton';

class UIContentButton extends React.Component {
  render () {
    const { image, title, text, buttonText, className, styles } = this.props;

    return (
      <div styleName="content-button" className={className}>
        <UILayer
          image={image}
          dots={false}
          overlay={false}
          greyscale={false}
          className={styles['layer']}
          imageClass={styles['image']}
        />
        <div styleName="content" className="p-all-3">
          <h1>
            {title}
          </h1>
          <div className="divider m-y-1" />
          <p>
            {text}
          </p>
          <UIButton>
            {buttonText}
          </UIButton>
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
