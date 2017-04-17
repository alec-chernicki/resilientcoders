import React, { PropTypes } from 'react';
import styles from './UISection.css';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

const useProps = {
  'primary': 'primary',
  'secondary': 'secondary',
};

class UISection extends React.Component {
  render () {
    const { use, children, className } = this.props;
    const sectionClass = classNames({
      'primary': use === useProps.primary,
      'secondary': use === useProps.secondary,
    });

    return (
      <div className={className} styleName={sectionClass}>
        {children}
      </div>
    )
  }
}

UISection.defaultProps = {
  use: useProps.primary
};

UISection.propTypes = {
  use: PropTypes.oneOf(Object.keys(useProps)),
};

export default CSSModules(UISection, styles);
