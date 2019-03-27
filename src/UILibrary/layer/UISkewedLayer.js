import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './UISkewedLayer.css';
import classNames from 'classnames';

const useProps = {
  'primary': 'primary',
  'secondary': 'secondary',
  'tertiary': 'tertiary',
};

class UISkewedLayer extends React.Component {
  render () {
    const { use, className } = this.props;
    const skewedLayerClass  = classNames({
      'primary': use === useProps.primary,
      'secondary': use === useProps.secondary,
      'tertiary': use === useProps.tertiary,
    });

    return (
      <div styleName="container" className={className}>
        <div styleName={skewedLayerClass} />
      </div>
    );
  }
}

UISkewedLayer.defaultProps = {
  use: useProps.primary,
};

UISkewedLayer.propTypes = {
  use: PropTypes.oneOf(Object.keys(useProps)),
};

export default CSSModules(UISkewedLayer, styles);
