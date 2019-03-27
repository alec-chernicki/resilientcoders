import React from 'react';
import PropTypes from 'prop-types';
import styles from './LinkBase.css';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

const linkUseProps = {
  'primary': 'primary',
  'secondary': 'secondary',
  'tertiary': 'tertiary'
};

class Link extends React.Component {
  render () {
    const { children, use, className } = this.props;
    const linkClass = classNames({
      'primary': use === linkUseProps.primary,
      'secondary': use === linkUseProps.secondary,
      'tertiary': use === linkUseProps.tertiary,
    });

    return (
      <span className={className} styleName={linkClass}>
        {children}
      </span>
    );
  }
}

Link.defaultProps = {
  use: linkUseProps.primary,
};

Link.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  use: PropTypes.oneOf(Object.keys(linkUseProps)),
  target: PropTypes.string,
};

export default CSSModules(Link, styles);
