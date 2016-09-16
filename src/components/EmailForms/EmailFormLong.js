import './Forms.scss';
import React from 'react';
import axios from 'axios';
import classNames from 'classnames';
import Formsy from 'formsy-react'
import TextInput from './TextInput';

class EmailFormLong extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      canSubmit: false
    }
  }
  enableButton() {
    this.setState({
      canSubmit: true
    });
  }
  disableButton() {
    this.setState({
      canSubmit: false
    });
  }
  submit(data) {
    axios.post(this.props.formUrl, data)
    .catch((e) => {
      console.log(e.message);
    })
  }
  render() {
    const buttonClass = classNames('button', {
      'disabled': !this.state.canSubmit
    })
    return (
      <div
        className="section-main section-tertiary section-tertiary__subtle email-form email-form--long">
        <div className="section-container-primary">
          <h1>{this.props.title}</h1>
          <p>{this.props.text}</p>
          <div className="divider divider__red" />
          <Formsy.Form onValidSubmit={this.submit.bind(this)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>
            <div className="control">
              <TextInput name="firstName" placeholder="First Name" required/>
              <TextInput name="lastName" placeholder="Last Name"required/>
            </div>
            <div className="control">
              <TextInput name="company" placeholder="Company" />
            </div>
            <div className="control">
              <TextInput name="email" placeholder="your@email.com" validations="isEmail" validationError="This is not a valid email" required/>
            </div>
            <button type="submit" className={buttonClass} disabled={!this.state.canSubmit}>Submit</button>
          </Formsy.Form>
        </div>
      </div>
    );
  }
}

export default EmailFormLong;
