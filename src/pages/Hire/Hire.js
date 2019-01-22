import React from 'react';
import styles from './Hire.css';
import CSSModules from 'react-css-modules';
import UIButton from 'UILibrary/button/UIButton';
import RouteTransition from '../../components/RouteTransition/RouteTransition';
import LabHeroImage from './lab-hero.png';
import Helmet from 'react-helmet';

import UILayout from 'UILibrary/layout/UILayout';
import UIImage from 'UILibrary/image/UIImage';
import UISection from 'UILibrary/layout/UISection';
import UICard from 'UILibrary/layout/UICard';
import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';
// import UILayer from 'UILibrary/layer/UILayer';
import UIHero from 'UILibrary/layout/UIHero';

import hireConfig from './hireConfig';

class Lab extends React.PureComponent {
  renderWork() {
    return hireConfig.map((item, key) => {
      return (
        <UIFlexRow key={key} className="m-bottom-6 with-shadow">
          <UIFlex>
            <UIImage type="cover" src={item.image} />
          </UIFlex>
          <UIFlex>
            <UICard className="p-all-6">
              <h2>
                {item.title}
              </h2>
              <h3>
                {item.note}
              </h3>
              <p>
                {item.description}
              </p>
            </UICard>
          </UIFlex>
        </UIFlexRow>
      );
    });
  }
  render() {
    return (
      <RouteTransition>
        <Helmet title="Hire" />
        <UIHero
          className="hero"
          image={LabHeroImage}
          short={true}
          titleOne="Hire"
          text="Committing to diversity and inclusion at your company requires more than words. It requires action. We’re here to make that easy for you."
        />
        <UILayout>
          <UISection>
            <UIFlexRow className="p-bottom-6">
              <UIFlex basis="60%" className="pull-up-offset-3 index-10 hero-card-second">
                <UICard className="p-all-6 full-height pull-up-3 with-shadow">
                  <h2>Hire Our Graduates</h2>
                  <div className="divider" />
                  <p>
                  By the time they graduate from the program, our students will have learned full stack javascript,
                  including React and Node. They will have worked with SQL and NoSQL databases. They will
                  have built at least one full stack application, soup to nuts. They will have pushed to 20+ repositories on GitHub, participated
                  in Agile product sprints, and gained more industry experience than most college graduates with CS degrees.
                  Our graduates go on to work for companies including Wellington, Fidelity, SapientRazorfish,
                  the City of Boston, the Boston Globe, and tech startups such as Veson Nautical, Gravyty, Bison, and many others. 
                  Reach out to learn how they can contribute to your software engineering team.
                  </p>
                </UICard>
              </UIFlex>
              <UIFlex basis="40%" className="hero-card-first">
                <UICard use="secondary" className="p-all-6 with-shadow full-height">
                  <h3 className="m-top-0">What our graduates do:</h3>
                  <p>Full stack JavaScript</p>
                  <p>Git version control</p>
                  <p>Modular design and development</p>
                  <p>Agile sprints</p>
                  <UIButton href="mailto:stephanie@resilientcoders.org">
                    Email to learn more
                  </UIButton>
                </UICard>
              </UIFlex>
            </UIFlexRow>
          </UISection>
        </UILayout>


        <UILayout>
          <UISection className="p-bottom-1">
            {this.renderWork()}
          </UISection>
        </UILayout>

      </RouteTransition>
    )
  }
}

export default CSSModules(Lab, styles);
