import './Forms.scss';
import React from 'react'
import EmailInput from './EmailInput';

class EmailFormInline extends React.Component {
  render() {
    return (
      <form className="email-form email-form-inline">
        <EmailInput/>

        <div className="control">
          <input type="checkbox" name="newsletter"/>
          <label for="newsletter">
            Sign up for our newsletter
          </label>
        </div>
      </form>
    )
  }
}

export default EmailFormInline;
