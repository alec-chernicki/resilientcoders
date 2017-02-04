import './StepContent.scss';
import React from 'react';

class StepContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="step-content">
        <div className="step-content__image-container">
          <div className="step-content__image-overlay" />
          <div className="step-content__image-outer">
            <div className="step-content__image-inner">
              <div
                style={{backgroundImage: "http://placecorgi.com/260/180"}}
                className="step-content__image"
              />
            </div>
          </div>
        </div>
        <div className="step-content__text">
          <h2>Coworking</h2>
          <p>
            Coworking presents our students with an opportunity to
            hang out in a safe space together, meet other young coders, and interact with tech
            professionals as they further explore web development at their pace.
          </p>
        </div>
      </div>
    );
  }
}

export default StepContent;
