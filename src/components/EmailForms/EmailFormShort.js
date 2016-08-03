import './Forms.scss';
import React, { PropTypes } from 'react'

class EmailFormShort extends React.Component {
  render () {
    return (
      <div className="section-main section-tertiary section-tertiary__subtle email-form email-form-short">
        <div className="section-container-primary">
          <p>Stay in the loop and hear what we're up to</p>
          <form className="email-form">
            <input spellCheck="false" type="text" />
            <button className="button" role="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    )
  }
}

export default EmailFormShort;
