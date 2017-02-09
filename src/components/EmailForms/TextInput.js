import React from 'react'
import classNames from 'classnames';
import Formsy from 'formsy-react';

//TODO: This component looks diff from every other one because this library ONLY works with mixinsw. :(
const FormInput = React.createClass({

  // Add the Formsy Mixin
  mixins: [Formsy.Mixin],

  // setValue() will set the value of the component, which in
  // turn will validate it and the rest of the form
  changeValue(event) {
    this.setValue(event.currentTarget.value);
  },

  getShowError() {
    if (!this.isFormSubmitted()) {
      return false;
    }

    else if (this.isValidValue() && this.isFormSubmitted()) {
      return false;
    }

    else if (this.isValid() && this.isFormSubmitted()) {
      return false;
    }

    else {
      return true;
    }
  },

  render() {
    // Set a specific className based on the validation
    // state of this component. showRequired() is true
    // when the value is empty and the required prop is
    // passed to the input. showError() is true when the
    // value typed is invalid

    const inputClass = classNames('control-input', {
      'required': this.showRequired(),
      'error': this.getShowError(),
    })

    const labelClass = classNames({
      visible: !!this.getValue()
    })

    // An error message is returned ONLY if the component is invalid
    // or the server has returned an error message
    const errorMessage = this.getErrorMessage();

    return (
      <div className={inputClass}>
        <label className={labelClass}>{this.props.label}</label>
        <input
          type="text"
          spellCheck="false"
          onChange={this.changeValue}
          value={this.getValue() || ''}
          placeholder={this.props.placeholder}
        />
        <span className="error-message">{errorMessage}</span>
      </div>
    );
  }
});

export default FormInput;
