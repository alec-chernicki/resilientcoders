import React from 'react';
import styles from './EmailFormLong.css';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import axios from 'axios';
import {Form} from 'formsy-react'

import UITextInput from 'UILibrary/form/UITextInput';
import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';

class EmailFormLong extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      canSubmit: false,
      buttonText: 'submit',
    }

    this.setFormElementRef = this.setFormElementRef.bind(this);
    this.validSubmit = this.validSubmit.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
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
    const { onSubmit } = this.props;

    this.setState({
      buttonText: 'submitting',
    })

    axios.post(this.props.formUrl, data)
      .then(() => {
        onSubmit();
        
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
    const { title } = this.props;
    const buttonClass = classNames({
      'disabled': !this.state.canSubmit,
    });

    return (
      <div styleName="form" className="with-shadow">
        <h2 className="p-y-3 p-x-6" styleName="header">
          {title}
        </h2>
        <Form
          ref={this.setFormElementRef}
          onValidSubmit={this.validSubmit}
          onValid={this.enableButton}
          onInvalid={this.disableButton}
        >
          <div className="p-x-6 p-top-3 p-bottom-4">
            <UIFlexRow className="m-bottom-2">
              <UIFlex className="m-right-2 m-sm-right-0 m-sm-bottom-2">
                <UITextInput
                  name="firstName"
                  placeholder="First Name"
                  label="First Name"
                  validations="isExisty"
                />
              </UIFlex>
              <UIFlex>
                <UITextInput
                  name="lastName"
                  placeholder="Last Name"
                  label="Last Name"
                  validations="isExisty"
                />
              </UIFlex>
            </UIFlexRow>
            <div className="m-bottom-2">
              <UITextInput
                name="company"
                label="Company"
                placeholder="Company"
                validations="isExisty"
              />
            </div>
            <div className="m-bottom-2">
              <UITextInput
                name="email"
                label="Your Email"
                placeholder="your@email.com"
                validations="isEmail"
                validationError="This is not a valid email"
                required
              />
            </div>
            <button styleName="submit-button" type="submit" className={buttonClass}>
              {this.state.buttonText}
            </button>
          </div>
        </Form>
      </div>
    );
  }
}

export default CSSModules(EmailFormLong, styles);
