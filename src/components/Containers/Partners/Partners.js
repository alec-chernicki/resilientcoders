import './Partners.scss';
import React from 'react';
import classNames from 'classnames';

import CenteredContainerInner from '../../../components/Containers/CenteredContainer/CenteredContainerInner';
import CenteredContainerOuter from '../../../components/Containers/CenteredContainer/CenteredContainerOuter';
import LinkPrimary from '../../../components/Buttons/LinkPrimary';

class Partners extends React.Component {
  renderPartners() {
    const {partnersConfig} = this.props;
    return partnersConfig.map((item, i) => (
      <div key={i}>
        <a href={item.link} target="blank">
          <img src={item.image} alt="resilient partner company" />
        </a>
      </div>
    ));
  }
  render() {
    const partnersClass = classNames('partners', this.props.className)
    return (
      <div className={partnersClass}>
        <h2>
          {this.props.title}
        </h2>
        <div className="partners__items">
          {this.renderPartners()}
        </div>
        <LinkPrimary to="/get-involved/company">
          {this.props.buttonText}
        </LinkPrimary>
      </div>
    )
  }
}

Partners.defaultProps = {
  buttonText: "Partner with us"
}

export default Partners;
