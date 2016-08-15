import './Forms.scss';
import React from 'react'
import EmailInput from './EmailInput';

class EmailFormShort extends React.Component {
  render() {
    return (
      <div
        className="section-main section-tertiary section-tertiary__subtle email-form email-form-short">
        <div className="section-container-primary">
          <p>Stay in the loop and hear what we're up to</p>
          <form className="email-form">
            <EmailInput/>
          </form>
        </div>
      </div>
    )
  }
}

export default EmailFormShort;
