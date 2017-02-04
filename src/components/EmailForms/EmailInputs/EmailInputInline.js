import '../Forms.scss';
import React from 'react';
import axios from 'axios';
import classNames from 'classnames';
import Formsy from 'formsy-react'
import TextInput from '../TextInput';

const INPUT_RESET_TIME = 2250;

const BUTTON_STATES = {
  'default': 'Subscribe',
  'waiting': 'Subscribing',
  'success': 'Subscribed',
  'error': 'error'
}

class EmailInputInline extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      canSubmit: false,
      buttonText: BUTTON_STATES.default,
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
  resetForm() {
    this.formElement.reset();
  }
  setFormElementRef(element) {
    this.formElement = element;
  }
  submit(data) {
    this.setState({ buttonText: BUTTON_STATES.waiting })

    axios.post('/api/subscribe/general', data)
      .then(() => {
        this.setState({ buttonText: BUTTON_STATES.success })

        setTimeout(() => {
          this.setState({ buttonText: BUTTON_STATES.default })
          this.resetForm();
        }, INPUT_RESET_TIME)
      })
      .catch((e) => {
        this.setState({ buttonText: BUTTON_STATES.error })

        setTimeout(() => {
          this.setState({ buttonText: BUTTON_STATES.default })
        }, INPUT_RESET_TIME)
      })
  }
  render () {
    const buttonClass = classNames('button', {
      'disabled': !this.state.canSubmit,
    })

    return (
      <Formsy.Form
        ref={this.setFormElementRef.bind(this)}
        onValidSubmit={this.submit.bind(this)}
        onValid={this.enableButton.bind(this)}
        onInvalid={this.disableButton.bind(this)}
      >
        <div className="control">
          <TextInput
            name="email"
            label="Your Email"
            placeholder="Enter your email address"
            validations="isEmail"
            validationError="This is not a valid email"
            required
          />
          <button
            type="submit"
            className={buttonClass}
            disabled={!this.state.canSubmit}
          >
            {this.state.buttonText}
          </button>
        </div>
      </Formsy.Form>
    )
  }
}

export default EmailInputInline;
