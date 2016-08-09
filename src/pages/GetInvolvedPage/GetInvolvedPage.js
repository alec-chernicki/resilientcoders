import './GetInvolved.scss';
import React from 'react';
import BinaryText from '../../components/BinaryText/BinaryText';

const GetInvolvedPage = (props) => {
  return (
    <div>
      <div className="page-hero">
        <div className="section-container-primary">
          <h1>
            <BinaryText>
              Get Involved
            </BinaryText>
          </h1>
        </div>
      </div>
      <div className="centered-container-outer">
        <div className="centered-container-inner get-involved-info">
          <img src="http://placehold.it/350x650" className="get-involved-image" />
          <div className="get-involved-info-description">
            <h1>
              As an individual
            </h1>
            <div className="divider divider__red" />
            <p>
              Come mentor with us or tech a workshop. Our coders meet daily to learn HTML, CSS, jQuery, JavaScript, Bootstrap, and git, from professionals. They develop professional and leadership skills. And they begin honing a direction for the ambition that they've always had.
            </p>
          </div>
        </div>
        <div className="centered-container-inner get-involved-info">
          <div className="get-involved-info-description">
            <h1>
              As a company
            </h1>
            <div className="divider divider__red" />
            <p>
              Looking for talent? Our highest-performing Bootcampers are recruited into a paid apprenticeship at Resilient Lab, our web development company. There, they further develop their technical skills, as well as core professional skills. Hire Resilient Lab on a contract basis, or hire our alumni as they graduate from their apprenticeship.
            </p>
          </div>
          <img src="http://placehold.it/350x650" className="get-involved-image" />
        </div>
        <div className="centered-container-inner get-involved-info">
          <h1>
            Donate
          </h1>
          <div className="divider divider__red" />
          <p>
            There's a lot going on, and many opportunities for you to get involved. For any donation of $75 or more, we'll send you a Resilient Coders hoodie. They're printed here in Massachusetts by court-involved youth.
          </p>
        </div>
      </div>
    </div>
  )
}

export default GetInvolvedPage
