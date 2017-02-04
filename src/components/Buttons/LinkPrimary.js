import './buttons.scss';
import React, {PropTypes} from 'react';
import classNames from 'classnames';
import {Link} from 'react-router';

class LinkPrimary extends React.Component {
  renderButton() {
    const {href, children, to, target} = this.props;

    if (href) {
      return (
        <a className="link" href={href} target={target}>
          {children}
        </a>
      )
    }
    else if (to) {
      return (
        <Link to={to} className="link">
          {children}
        </Link>
      )
    }
    else {
      return (
        <a className="link" href="#">
          {children}
        </a>
      );
    }
  }
  render() {
    const {children, target, href, className} = this.props;
    return (
      <div>
        {this.renderButton()}
      </div>
    )
  }
}

export default LinkPrimary
