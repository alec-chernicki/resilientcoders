import './Partners.scss';
import React from 'react';
import classNames from 'classnames';
import UIButton from 'UILibrary/button/UIButton';

import UIImage from 'UILibrary/image/UIImage';
import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';
import UISection from 'UILibrary/layout/UISection';
import UILayout from 'UILibrary/layout/UILayout';

class Partners extends React.PureComponent {
  renderPartners() {
    const {partnersConfig} = this.props;
    return partnersConfig.map((item, i) => (
      <UIFlex basis="13%" grow={0} shrink={0} key={i} className="m-x-3 m-bottom-2">
        <a href={item.link} target="blank">
          <UIImage
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
      <UILayout use="secondary">
        <UISection className="text-center p-all-6">
          <div className={partnersClass}>
            <h2>
              {this.props.title}
            </h2>
            <UIFlexRow justify="center" align="center">
              {this.renderPartners()}
            </UIFlexRow>
            <UIButton type="link" to={this.props.to}>
              {this.props.buttonText}
            </UIButton>
          </div>
        </UISection>
      </UILayout>
    )
  }
}

Partners.defaultProps = {
  buttonText: "Partner with us",
  to: "/get-involved/company"
}

export default Partners;
