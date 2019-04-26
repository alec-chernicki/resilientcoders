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


class Donate extends React.PureComponent {
  render() {
    return (
      <RouteTransition>
        <Helmet title="Donate" />
        <UIHero
          className="hero"
          image={LabHeroImage}
          short={true}
          titleOne="Donate"
          text="Committing to diversity and inclusion at your company requires more than words. It requires action. We’re here to make that easy for you."
        />
        <UILayout>
          <UISection>
            <UIFlexRow className="p-bottom-6">
              <UIFlex basis="60%" className="pull-up-offset-3 index-10 hero-card-second">
                <UICard className="p-all-6 full-height pull-up-3 with-shadow">
                me
                </UICard>
              </UIFlex>
              <UIFlex basis="40%" className="hero-card-first">
                <UICard use="secondary" className="p-all-6 with-shadow full-height">
                  me
                  <UIButton href="mailto:stephanie@resilientcoders.org">
                    Email to learn more
                  </UIButton>
                </UICard>
              </UIFlex>
            </UIFlexRow>
          </UISection>
        </UILayout>
      </RouteTransition>
    )
  }
}

export default CSSModules(Lab, styles);
