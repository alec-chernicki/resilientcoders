import './Forms.scss';
import React from 'react';
import EmailInputInline from './EmailInputs/EmailInputInline';

class EmailFormShort extends React.PureComponent {
  constructor(props) {
    super(props);

    this.renderText = this.renderText.bind(this);
  }
  renderText() {
    return <p>{this.props.text}</p>
  }
  render () {
    return (
      <div className="email-form email-form--short">
        {this.renderText()}
        <EmailInputInline />
      </div>
    )
  }
}

export default EmailFormShort;
