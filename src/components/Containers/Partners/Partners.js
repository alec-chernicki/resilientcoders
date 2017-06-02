import styles from './Partners.css';
import CSSModules from 'react-css-modules';
import React from 'react';
import classNames from 'classnames';
import UIButton from 'UILibrary/button/UIButton';

import UIImage from 'UILibrary/image/UIImage';
import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';

class Partners extends React.PureComponent {
  renderPartners() {
    const {partnersConfig, styles} = this.props;
    return partnersConfig.map((item, i) => (
      <UIFlex
        basis="auto"
        grow={0}
        shrink={0}
        key={i}
        className="m-x-3 m-bottom-3 m-sm-bottom-6"
      >
        <a href={item.link} target="blank">
          <UIImage
            className={styles['partner-image']}
            type="responsive"
            src={item.image}
            alt="resilient partner company"
          />
        </a>
      </UIFlex>
    ));
  }
  render() {
    const partnersClass = classNames('partners', this.props.className)
    return (
      <div className={partnersClass}>
        <h2 className="m-bottom-3 m-sm-bottom-6">
          {this.props.title}
        </h2>
        <UIFlexRow justify="center" align="center">
          {this.renderPartners()}
        </UIFlexRow>
        <UIButton type="link" to={this.props.to}>
          {this.props.buttonText}
        </UIButton>
      </div>
    )
  }
}

Partners.defaultProps = {
  buttonText: "Partner with us",
  to: "/get-involved/company"
}

export default CSSModules(Partners, styles);
