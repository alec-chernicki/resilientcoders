import './BootcampPartners.scss';
import React from 'react'

const BootcampPartners = () => (
  <div
    className="centered-container-outer centered-container-outer__white bootcamp-partners">
    <div className="centered-container-inner centered-container-inner__white">
      <h2>
        Thank you to our bootcamp partners
      </h2>
      <div className="bootcamp-partner-companies">
        <div>
          <img src="https://resilientcoders.s3.amazonaws.com/i/logos/youboston.png" alt="bootcamp partner company"/>
        </div>
        <div>
          <img src="https://resilientcoders.s3.amazonaws.com/i/logos/tbf.png" alt="bootcamp partner company"/>
        </div>
        <div>
          <img src="https://resilientcoders.s3.amazonaws.com/i/logos/AscienzoLogo.jpg" alt="bootcamp partner company"/>
        </div>
        <div>
          <img
            src="https://resilientcoders.s3.amazonaws.com/i/logos/State_Street_logo.png" alt="bootcamp partner company"/>
        </div>
      </div>
    </div>
  </div>
)

export default BootcampPartners;
