import './TeamPartners.scss';
import React from 'react'
import teamPartnersConfig from './teamPartnersConfig';

class TeamPartners extends React.Component {
  renderTeamPartners() {
    return teamPartnersConfig.map((item, i) => (
      <div>
        <a href={item.link} target="blank">
          <img src={item.image} alt="resilient partner company" />
        </a>
      </div>
    ));
  }
  render() {
    return (
      <div
        className="centered-container-outer centered-container-outer__white main-partners">
        <div className="centered-container-inner centered-container-inner__white">
          <h2>
            Our partners make it all possible
          </h2>
          <div className="main-partner-companies">
            {this.renderTeamPartners()}
          </div>
        </div>
      </div>
    )
  }
}

export default TeamPartners;
