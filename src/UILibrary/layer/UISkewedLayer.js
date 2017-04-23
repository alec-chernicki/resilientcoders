import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './UISkewedLayer.css';
import UILayer from 'UILibrary/layer/UILayer';
import classNames from 'classnames';

const useProps = {
  'primary': 'primary',
  'secondary': 'secondary',
};

class UISkewedLayer extends React.Component {
  renderContent () {
    const { image } = this.props;

    if (image) {
      return (
        <div styleName="content">
          <UILayer {...this.props} />
        </div>
      );
    }
  }
  render () {
    const { use } = this.props;
    const skewedLayerClass  = classNames({
      'primary': use === useProps.primary,
      'secondary': use === useProps.secondary,
    });

    return (
      <div styleName="container">
        <div styleName={skewedLayerClass}>
          {this.renderContent()}
        </div>
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
