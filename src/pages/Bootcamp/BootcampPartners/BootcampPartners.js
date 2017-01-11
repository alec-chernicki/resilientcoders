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
        <img src="/build/logo_microsoft.png" alt="bootcamp partner company"/>
      </div>
      <div>
        <img src="/build/logo_google.png" alt="bootcamp partner company"/>
      </div>
        <div>
          <img src="https://resilientcoders.s3.amazonaws.com/i/logos/tbf.png" alt="bootcamp partner company"/>
        </div>
        <div>
          <img src="/build/logo_ameliapeabody.jpg" alt="bootcamp partner company"/>
        </div>
        <div>
          <img src="/build/logo_johnhancock.png" alt="bootcamp partner company"/>
        </div>
        <div>
          <img src="/build/logo_bnymellon.svg.png" alt="bootcamp partner company"/>
        </div>
        <div>
          <img src="/build/logo_insightsquared.png" alt="bootcamp partner company"/>
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
