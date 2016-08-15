import './Forms.scss';
import React from 'react'

const EmailInput = () => {
  return (
    <div className="control">
      <input spellCheck="false" type="text" placeholder="your@email.com"/>
      <button className="button" role="button">SUBMIT</button>
    </div>
  )
}

export default EmailInput
