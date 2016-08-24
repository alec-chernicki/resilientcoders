import './buttons.scss';
import React, {PropTypes} from 'react';
import classNames from 'classnames';
import {Link} from 'react-router';

class ButtonPrimary extends React.Component {
  renderButton() {
    const {href, children, to, target} = this.props;

    if (href) {
      return (
        <a className="button" href={href} target={target}>
          {children}
        </a>
      )
    }
    else if (to) {
      return (
        <Link to={to} className="button">
          {children}
        </Link>
      )
    }
    else {
      return (
        <a className="button" href="#">
          {children}
        </a>
      );
    }
  }
  render() {
    const {children, target, href, className} = this.props;
    const buttonPrimaryClass = classNames('button-container', className)

    return (
      <div className={buttonPrimaryClass}>
        {this.renderButton()}
      </div>
    )
  }
}

ButtonPrimary.propTypes = {
  target: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string,
}

export default ButtonPrimary
