import React, { PropTypes } from 'react';
import styles from './UICard.css';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

const useProps = {
  'primary': 'primary',
  'secondary': 'secondary',
  'tertiary': 'tertiary',
};

class UICard extends React.Component {
  render () {
    const { use, children, className } = this.props;
    const cardClass = classNames({
      'card-primary': use === useProps.primary,
      'card-secondary': use === useProps.secondary,
      'card-tertiary': use === useProps.tertiary,
    });

    return (
      <div className={className} styleName={cardClass}>
        {children}
      </div>
    )
  }
}

UICard.defaultProps = {
  use: useProps.primary
};

UICard.propTypes = {
  use: PropTypes.oneOf(Object.keys(useProps)),
};

export default CSSModules(UICard, styles);
