import React, { PropTypes } from 'react';
import styles from './UILayout.css';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

const useProps = {
  'primary': 'primary',
  'secondary': 'secondary',
  'tertiary': 'tertiary',
  'transparent': 'transparent',
};

class UILayout extends React.Component {
  render () {
    const { children, use, flush, className } = this.props;

    const layoutClass =  classNames({
      'primary': use === useProps.primary,
      'secondary': use === useProps.secondary,
      'tertiary': use === useProps.tertiary,
      'transparent': use === useProps.transparent,
      'with-padding': flush === false,
    });

    return (
      <div styleName={layoutClass} className={className}>
        {children}
      </div>
    )
  }
}

UILayout.defaultProps = {
  use: useProps.primary,
  flush: false,
};

UILayout.propTypes = {
  use: PropTypes.oneOf(Object.keys(useProps)),
  flush: PropTypes.bool,
};

export default CSSModules(UILayout, styles, {allowMultiple: true});
