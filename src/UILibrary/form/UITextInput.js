import React from 'react';
import styles from './UITextInput.css';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import Formsy from 'formsy-react';

class UITextInput extends React.Component {
  constructor() {
    super();

    this.changeValue = this.changeValue.bind(this);
  }
  changeValue(event) {
    this.props.setValue(event.currentTarget.value);
  }

  getShowError() {
    const {
      isFormSubmitted,
      isValidValue,
      isValid,
    } = this.props;

    if (!isFormSubmitted()) {
      return false;
    }

    else if (isValidValue() && isFormSubmitted()) {
      return false;
    }

    else if (isValid() && isFormSubmitted()) {
      return false;
    }

    else {
      return true;
    }
  }

  render() {
    const {
      getValue,
      getErrorMessage,
      label,
      placeholder
    } = this.props;

    const labelClass = classNames({
      "label-hidden": !getValue(),
      "label-visible": !!getValue()
    })

    // An error message is returned ONLY if the component is invalid
    // or the server has returned an error message
    const errorMessage = getErrorMessage();

    return (
      <div styleName="text-input-wrapper">
        <label styleName={labelClass}>{label}</label>
        <input
          type="text"
          styleName="text-input"
          spellCheck="false"
          onChange={this.changeValue}
          value={getValue() || ''}
          placeholder={placeholder}
        />
        <span className="error-message">{errorMessage}</span>
      </div>
    );
  }
}

export default CSSModules(UITextInput, styles);
