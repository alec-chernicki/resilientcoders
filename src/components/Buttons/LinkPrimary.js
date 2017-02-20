import './buttons.scss';
import React from 'react';
import {Link} from 'react-router';

class LinkPrimary extends React.PureComponent {
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
    return (
      <div>
        {this.renderButton()}
      </div>
    )
  }
}

export default LinkPrimary
