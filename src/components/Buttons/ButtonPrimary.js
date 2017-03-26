import './buttons.scss';
import React, {PropTypes} from 'react';
import classNames from 'classnames';
import {Link} from 'react-router';
import rightArrowImage from '../../images/right-arrow.svg';

class ButtonPrimary extends React.PureComponent {
  renderButton() {
    const {href, children, to, target} = this.props;

    if (href) {
      return (
        <a href={href} target={target}>
          <span className="button__content">
            {children}
          </span>
          <span className="button__icon-wrapper">
            <img src={rightArrowImage} />
          </span>
        </a>
      )
    }
    else if (to) {
      return (
        <Link to={to}>
          <span className="button__content">
            {children}
          </span>
          <span className="button__icon-wrapper">
            <img src={rightArrowImage} />
          </span>
        </Link>
      )
    }
    else {
      return (
        <a href="#">
          <span className="button__content">
            {children}
          </span>
          <span className="button__icon-wrapper">
            <img src={rightArrowImage} />
          </span>
        </a>
      );
    }
  }
  render() {
    const {className} = this.props;
    const buttonPrimaryClass = classNames('button', className, {
      'button--red': this.props.color === 'red',
      'button--white': this.props.color === 'white'
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
