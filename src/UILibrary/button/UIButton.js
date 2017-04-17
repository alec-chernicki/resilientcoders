import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import rightArrowImage from '../../images/right-arrow.svg';
import ButtonBase from './_core/ButtonBase';
import LinkBase from './_core/LinkBase';

const typeProps = {
  'button': 'button',
  'link': 'link',
};

class UIButton extends React.PureComponent {
  renderButton() {
    const {href, children, to, target, image, use, type} = this.props;
    const Component = type === typeProps.link ? LinkBase : ButtonBase;

    if (href) {
      return (
        <a href={href} target={target}>
          <Component image={image} use={use}>
            {children}
          </Component>
        </a>
      )
    }
    else if (to) {
      return (
        <Link to={to}>
          <Component image={image} use={use}>
            {children}
          </Component>
        </Link>
      )
    }
    else {
      return (
        <a href="#">
          <Component image={image} use={use}>
            {children}
          </Component>
        </a>
      );
    }
  }
  render() {
    const {className} = this.props;
    return (
      <div className={className}>
        {this.renderButton()}
      </div>
    )
  }
}

UIButton.defaultProps = {
  image: rightArrowImage,
  type: typeProps.button,
};

UIButton.propTypes = {
  target: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(typeProps)),
}

export default UIButton;
