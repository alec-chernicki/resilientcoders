import React from 'react';
import styles from './GetInvolvedTypes.css';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';
import UIContentButton from 'UILibrary/button/UIContentButton';
import UISection from 'UILibrary/layout/UISection';
import UILayer from 'UILibrary/layer/UILayer';
import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';

import heroImage from './hero.jpg';
import mentorImage from './mentor.png';
import studentImage from './student.png';
import companyImage from './company.png';

const cards = [
  {
    title: 'Companies',
    text: 'Hire our students and increase diversity within your workforce.',
    image: companyImage,
    url: '/get-involved/company'
  },
  {
    title: 'Students',
    text: 'Start your coding career now, learn how to start learning with us.',
    image: studentImage,
    url: '/get-involved/student'
  },
  {
    title: 'Mentors',
    text: 'Give back to your community and become a diversity advocate.',
    image: mentorImage,
    url: '/get-involved/mentor'
  }
];

class GetInvolvedTypes extends React.Component {
  renderCards() {
    return cards.map((item, key) => {
      return (
        <UIFlex
          basis="31%"
          grow={0}
          shrink={0}
        >
          <Link to={item.url}>
            <UIContentButton
              image={item.image}
              title={item.title}
              text={item.text}
              buttonText="Learn more"
              className="p-top-17"
            />
          </Link>
        </UIFlex>
      );
    })
  }
  render () {
    return (
      <div style={{position: 'relative'}}>
        <UILayer image={heroImage} />
        <UISection className="p-top-11 p-bottom-6">
          <UIFlexRow wrap="no-wrap" justify="space-between">
            {this.renderCards()}
          </UIFlexRow>
        </UISection>
      </div>
    )
  }
}

export default CSSModules(GetInvolvedTypes, styles);
