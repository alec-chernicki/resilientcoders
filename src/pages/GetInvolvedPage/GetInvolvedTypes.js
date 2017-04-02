import './GetInvolvedTypes.scss';
import React from 'react';
import { Link } from 'react-router';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';

const cards = [
  {
    title: 'Companies',
    text: 'Hire our students and increase diversity within your workforce.',
    url: '/get-involved/company'
  },
  {
    title: 'Students',
    text: 'Start your coding career now, learn how to start learning with us.',
    url: '/get-involved/student'
  },
  {
    title: 'Mentors',
    text: 'Give back to your community and become a diversity advocate.',
    url: '/get-involved/mentor'
  }
];

class GetInvolvedTypes extends React.Component {
  renderCards() {
    return cards.map((item, key) => {
      const typeClassName = item.title.toLowerCase();

      return (
        <Link
          key={key}
          to={item.url}
          className="get-involved-types__item"
        >
          <div className={`get-involved-types__image get-involved-types__item--${typeClassName}`} />
          <div className="get-involved-types__content">
            <div className="get-involved-types__content__intro">
              <h3>For:</h3>
              <div className="divider divider--red" />
              <h2>{item.title}</h2>
            </div>
            <div className="get-involved-types__content__info">
              <p>{item.text}</p>
              <ButtonPrimary>
                Learn More
              </ButtonPrimary>
            </div>
          </div>
        </Link>
      );
    })
  }
  render () {
    return (
      <div className="get-involved-types">
        {this.renderCards()}
      </div>
    )
  }
}

export default GetInvolvedTypes;
