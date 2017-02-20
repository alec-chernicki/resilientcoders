import './Forms.scss';
import React from 'react';
import axios from 'axios';
import classNames from 'classnames';
import Formsy from 'formsy-react'
import TextInput from './TextInput';

class EmailFormLong extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      canSubmit: false,
      buttonText: 'submit',
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
  resetForm () {
    this.formElement.reset();
  }
  setFormElementRef(element) {
    this.formElement = element;
  }
  validSubmit(data) {
    console.log('submitted 2');
    this.setState({
      buttonText: 'submitting',
    })

    axios.post(this.props.formUrl, data)
      .then(() => {
        this.setState({
          buttonText: 'submitted',
        })

        setTimeout(() => {
          this.setState({
            buttonText: 'submit',
          });
          this.resetForm();
        }, 2250)
      })
      .catch((e) => {
        this.setState({
          buttonText: 'error',
        })

        setTimeout(() => {
          this.setState({
            buttonText: 'submit',
          })
        }, 2250)
      })
  }
  render() {
    const buttonClass = classNames('button', {
      'disabled': !this.state.canSubmit,
    });

    return (
      <div className="email-form email-form--long ">
        <div className={`email-form--long__wrapper ${this.props.className}`}>
          <h2>Subscribe</h2>
          <Formsy.Form
            ref={this.setFormElementRef.bind(this)}
            onValidSubmit={this.validSubmit.bind(this)}
            onValid={this.enableButton.bind(this)}
            onInvalid={this.disableButton.bind(this)}
          >
            <div className="control">
              <TextInput name="firstName"
                placeholder="First Name"
                label="First Name"
                validations="isExisty"
              />
              <TextInput
                name="lastName"
                placeholder="Last Name"
                label="Last Name"
                validations="isExisty"
              />
            </div>
            <div className="control">
              <TextInput
                name="company"
                label="Company"
                placeholder="Company"
                validations="isExisty"
              />
            </div>
            <div className="control">
              <TextInput
                name="email"
                label="Your Email"
                placeholder="your@email.com"
                validations="isEmail"
                validationError="This is not a valid email"
                required
              />
            </div>
            <button type="submit" className={buttonClass}>
              {this.state.buttonText}
            </button>
          </Formsy.Form>
        </div>
      </div>
    );
  }
}

export default EmailFormLong;
