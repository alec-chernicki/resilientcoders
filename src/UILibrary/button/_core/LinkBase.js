import React, { PropTypes } from 'react';
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
    const { href, children, use, target, className } = this.props;
    const linkClass = classNames({
      'primary': use === linkUseProps.primary,
      'secondary': use === linkUseProps.secondary,
      'tertiary': use === linkUseProps.tertiary,
    });

    return (
      <a className={className} href={href} styleName={linkClass} target={target}>
        {children}
      </a>
    );
  }
}

Link.defaultProps = {
  use: linkUseProps.primary,
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  use: PropTypes.oneOf(Object.keys(linkUseProps)),
  target: PropTypes.string,
};

export default CSSModules(Link, styles);
