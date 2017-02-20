import './buttons.scss';
import React, {PropTypes} from 'react';
import classNames from 'classnames';
import {Link} from 'react-router';

class ButtonPrimary extends React.PureComponent {
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
    const {className} = this.props;
    const buttonPrimaryClass = classNames('button-container', className, {
      'button-container--red': this.props.color === 'red',
      'button-container--white': this.props.color === 'white'
    })

    return (
      <div className={buttonPrimaryClass}>
        {this.renderButton()}
      </div>
    )
  }
}

ButtonPrimary.defaultProps = {
  color: 'red'
}

ButtonPrimary.propTypes = {
  target: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string,
}

export default ButtonPrimary
