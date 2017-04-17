import './Partners.scss';
import React from 'react';
import classNames from 'classnames';
import UIButton from 'UILibrary/button/UIButton';

class Partners extends React.PureComponent {
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

export default Partners;
