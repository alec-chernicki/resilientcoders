import './Forms.scss';
import React from 'react';
import axios from 'axios';
import classNames from 'classnames';
import Formsy from 'formsy-react'
import TextInput from './TextInput';

class EmailFormShort extends React.Component {
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

  submit(data) {
    this.setState({
      buttonText: 'submitting',
    })
    axios.post('/api/subscribe/general', data)
      .then(() => {
        this.setState({
          buttonText: 'submitted',
        })

        setTimeout(() => {
          this.setState({
            buttonText: 'submit',
          })
        }, 2000)
      })
      .catch((e) => {
        this.setState({
          buttonText: 'error',
        })

        setTimeout(() => {
          this.setState({
            buttonText: 'submit',
          })
        }, 2000)
      })
  }
  render () {
    const buttonClass = classNames('button', {
      'disabled': !this.state.canSubmit
    })

    return (
      <div
        className="section-main section-tertiary section-tertiary__subtle email-form email-form--short">
        <div className="section-container-primary">
          <p>Stay in the loop and hear what we're up to</p>
          <Formsy.Form
            onValidSubmit={this.submit.bind(this)}
            onValid={this.enableButton.bind(this)}
            onInvalid={this.disableButton.bind(this)}
          >
            <div className="control">
              <TextInput name="email"
                placeholder="your@email.com"
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
        </div>
      </div>
    )
  }
}

export default EmailFormShort;
