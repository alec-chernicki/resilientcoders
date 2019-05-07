import React from 'react';
import styles from './Donate.css';
import CSSModules from 'react-css-modules';
import UIButton from 'UILibrary/button/UIButton';
import RouteTransition from '../../components/RouteTransition/RouteTransition';
import Helmet from 'react-helmet';

import UILayout from 'UILibrary/layout/UILayout';
import UIImage from 'UILibrary/image/UIImage';
import UISection from 'UILibrary/layout/UISection';
import UICard from 'UILibrary/layout/UICard';
import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';
// import UILayer from 'UILibrary/layer/UILayer';
import UIHero from 'UILibrary/layout/UIHero';

import PaypalDonateButton from './PaypalDonateButton';

import donateImage from './donateHero.jpg';


class Donate extends React.PureComponent {
  
  render() {
    return (
      <RouteTransition>
        <Helmet title="Donate" />
        <UIHero
          className="hero"
          image={donateImage}
          short={true}
          titleOne="INVEST IN LOCAL TECH TALENT"
          text="Your support allows us to spread code literacy to communities traditionally underrepresented in technology. Join us in hacking the opportunity gap!"
        />

        <UILayout>
          <UISection className="p-bottom-6">
            <UIFlexRow>
              <UIFlex className="index-10 pull-up-offset-3 hero-card-first">
                <UICard className="p-all-6 pull-up-3 with-shadow">
                  <h1>Your Impact</h1>
                  <p>
                  Resilient Coders is a 501(c)(3) organization. Our Tax ID# is 47-1882343.
                    <span className="strong">
                      &nbsp;meaningful change.
                    </span>
                  </p>
                </UICard>
              </UIFlex>
              <UIFlex className="pull-up-offset-6 index-10 hero-card-second">
                <UIImage type="cover" src={donateImage} className="pull-up-6 with-shadow" />
              </UIFlex>
            </UIFlexRow>
          </UISection>
        </UILayout>

        <UILayout>
          <UISection>
            <UIFlexRow>
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
                  <PaypalDonateButton />
                </UICard>
              </UIFlex>
            </UIFlexRow>
            Your donation to Girls Who Code helps educate and equip girls to pursue opportunities in tech. Your donation will help us:
            <UIFlexRow className="p-bottom-6">
              <UIFlex basis="33%">
              
              <h3>Donate to Resilient Coders by mailing us a check</h3>
              <p>Our mailing address is:

              Resilient Coders.
              50 Milk Street
              Boston, Massachusetts 02125
              United States</p>
              </UIFlex>
              <UIFlex basis="33%">
                <h3>Donate Stock to Resilient Coders</h3>
                <p>If you want to donate stocks to Resilient Coders, please email us at info@resilientcoders.org.</p>
                </UIFlex>
              <UIFlex basis="33%">Donate Devices</UIFlex>
            </UIFlexRow>
          </UISection>
        </UILayout>
      </RouteTransition>
    )
  }
}

export default CSSModules(Donate, styles);
