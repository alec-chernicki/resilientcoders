import './Forms.scss';
import React from 'react';
import axios from 'axios';
import classNames from 'classnames';
import Formsy from 'formsy-react'
import TextInput from './TextInput';
import EmailInputInline from './EmailInputs/EmailInputInline';

class EmailFormShort extends React.Component {
  constructor(props) {
    super(props);

    this.renderText = this.renderText.bind(this);
  }
  renderText() {
    return <p>{this.props.text}</p>
  }
  render () {
    const buttonClass = classNames('button', {

    })

    return (
      <div className="email-form email-form--short">
        {this.renderText()}
        <EmailInputInline />
      </div>
    )
  }
}

export default EmailFormShort;
