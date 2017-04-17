import React, { PropTypes } from 'react';
import styles from './UIOverlay.css';
import CSSModules from 'react-css-modules';

class UIOverlay extends React.Component {
  render () {
    const { children, text } = this.props;

    return (
      <div styleName="container" className="accent-link-underline-trigger">
        <div styleName="overlay">
          <p styleName="text" className="accent-link-underline">
            {text}
          </p>
        </div>
        {children}
      </div>
    );
  }
}

export default CSSModules(UIOverlay, styles);
