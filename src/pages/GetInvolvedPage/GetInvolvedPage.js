import './GetInvolved.scss';
import React from 'react';
import { Link } from 'react-router';
import RouteTransition from '../../components/RouteTransition/RouteTransition';
import Helmet from 'react-helmet';

import UIButton from 'UILibrary/button/UIButton';
import UILayout from 'UILibrary/layout/UILayout';
import UIImage from 'UILibrary/image/UIImage';
import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';
import UICard from 'UILibrary/layout/UICard';
import UISection from 'UILibrary/layout/UISection';
import UIContentButton from 'UILibrary/button/UIContentButton';
import UILayer from 'UILibrary/layer/UILayer';

import donateImage from './donate.jpg';
import heroImage from './hero.jpg';
import mentorImage from './mentor.png';
import studentImage from './student.png';
import companyImage from './company.png';

// const INVOLVEMENT_TYPES = [
//   {
//     title: 'Hire',
//     text: 'Hire our students and increase diversity within your workforce.',
//     image: companyImage,
//     url: '/get-involved/company'
//   },
//   {
//     title: 'Students',
//     text: 'Start your coding career now, learn how to start learning with us.',
//     image: studentImage,
//     url: '/get-involved/student'
//   },
//   {
//     title: 'Volunteer',
//     text: 'Give back to your community and become a diversity advocate.',
//     image: mentorImage,
//     url: '/get-involved/volunteer'
//   }
// ];

// class GetInvolved extends React.Component {
//   renderCards() {
//     return INVOLVEMENT_TYPES.map((item, key) => {
//       return (
//         <UIFlex
//           key={key}
//           basis="31%"
//           grow={0}
//           shrink={0}
//           className="index-10 m-sm-bottom-4"
//         >
//           <Link to={item.url}>
//             <UIContentButton
//               image={item.image}
//               title={item.title}
//               text={item.text}
//               buttonText="Learn more"
//             />
//           </Link>
//         </UIFlex>
//       );
//     })
//   }
  render () {
    return (
      <RouteTransition>
        <Helmet title="Get Involved" />

        <UILayout use="tertiary" className="p-top-of-page p-bottom-6">
          <UILayer image={heroImage} className="index-1" />
          <UISection className="p-top-2 index-3">
            <UIFlexRow wrap="no-wrap" justify="space-between">
              {this.renderCards()}
            </UIFlexRow>
          </UISection>
        </UILayout>

        <UILayout className="p-y-6">
          <UISection>
            <UIFlexRow className="with-shadow">
              <UIFlex>
                <UIImage
                  type="cover"
                  src={donateImage}
                  alt="A group of coders"
                />
              </UIFlex>
              <UIFlex>
                <UICard className="p-all-6">
                  <h2>
                    Invest in local tech talent
                  </h2>
                  <p>
                    Your support allows us to spread code literacy to communities traditionally underrepresented in technology. Join us in hacking the opportunity gap!
                  </p>
                  <UIButton
                    target="_blank"
                    href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=44992UYNB8GTY"
                  >
                    Donate
                  </UIButton>
                  <p className="m-top-2">
                    Resilient Coders is a 501(c)(3) organization. Our Tax ID# is 47-1882343.
                  </p>
                </UICard>
             </UIFlex>
            </UIFlexRow>
          </UISection>
        </UILayout>
      </RouteTransition>
    )
  }
}

export default GetInvolved;
