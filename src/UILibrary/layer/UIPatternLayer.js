import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './UIPatternLayer.css';

import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';
import UIImage from 'UILibrary/image/UIImage';
import UILayer from 'UILibrary/layer/UILayer';

const IMAGES_PER_ROW = 5;

class UIPatternLayer extends React.Component {
  renderImages() {
    const { images } = this.props;
    const itemBasis = `${100 / IMAGES_PER_ROW}%`;

    return images.map(({image}, key) => {
      return (
        <UIFlex key={key} basis={itemBasis} grow={0} shrink={0}>
          <div styleName="greyscale">
            <UIImage type="responsive" src={image}/>
          </div>
        </UIFlex>
      );
    });
  }
  render () {
    return (
      <div styleName="pattern-layer-wrapper">
        <UILayer dots={false} />
        <div styleName="pattern-layer">
          <UIFlexRow wrap="wrap">
            {this.renderImages()}
          </UIFlexRow>
        </div>
      </div>
    );
  }
}

UIPatternLayer.propTypes = {
  images: PropTypes.array.isRequired
};

export default CSSModules(UIPatternLayer, styles);
