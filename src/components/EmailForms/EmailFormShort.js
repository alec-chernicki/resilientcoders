import styles from './EmailFormShort.css';
import CSSModules from 'react-css-modules';
import React from 'react';

import axios from 'axios';
import UITextInput from 'UILibrary/form/UITextInput';
import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';
import { Form } from 'formsy-react';

const INPUT_RESET_TIME = 2250;
const BUTTON_STATES = {
  'default': 'Subscribe',
  'waiting': 'Subscribing',
  'success': 'Subscribed',
  'error': 'error'
}

class EmailFormShort extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      canSubmit: false,
      buttonText: BUTTON_STATES.default,
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
    this.setState({
      buttonText: BUTTON_STATES.waiting,
    })

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
    const { className } = this.props
    return (
      <Form
        className={`${this.props.styles['form']} with-shadow p-all-1 ${className}` }
        ref={this.setFormElementRef}
        onValidSubmit={this.validSubmit}
        onValid={this.enableButton}
        onInvalid={this.disableButton}
      >
        <UIFlexRow>
          <UIFlex grow={0} shrink={0} basis="70%">
            <UITextInput
              name="email"
              label="Your Email"
              placeholder="your@email.com"
              validations="isEmail"
              validationError="This is not a valid email"
              required
            />
          </UIFlex>
          <UIFlex>
            <button styleName="submit-button" type="submit">
              Submit
            </button>
          </UIFlex>
        </UIFlexRow>
      </Form>
    )
  }
}

export default CSSModules(EmailFormShort, styles);
