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

import Steps from 'UILibrary/Steps/Steps';
import stepConfig from 'UILibrary/Steps/stepConfigDonate';


class Donate extends React.PureComponent {
  
  render() {
    const buttonComponent = <PaypalDonateButton />;
    return (
      <RouteTransition>
        <Helmet title="Donate" />
        <UIHero
          className="hero"
          image={donateImage}
          short={true}
          titleOne="INVEST IN LOCAL TECH TALENT"
          text="Your support allows us to spread code literacy to communities traditionally underrepresented in technology. Join us in hacking the opportunity gap!"
          buttonComponent={ buttonComponent }
        />

        <UILayout>
          <UISection className="p-bottom-6">
            <UIFlexRow>
              <UIFlex className="index-10 pull-up-offset-3 hero-card-first">
                <UICard className="p-all-6 pull-up-3 with-shadow">
                  <h1>Your Impact</h1>
                  <p>
                  We believe in coalition and our voice in the fight for income equality and access to the tech economy is amplified by the generosity of individual donors who help fund our program. Your donation to Resilient Coders helps <span className="strong">&nbsp;educate and equip</span> our coders to pursue opportunities in tech. Resilient Coders is a 501(c)(3) organization. Our Tax ID# is 47-1882343.                    
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
          <Steps 
            config={stepConfig}
            stepsTitle="MANY WAYS TO GIVE"
            stepsParagraph="In order to effectively educate and employ our students we’ve
            developed a funnel with overlapping means of engagement."
          />
        </UILayout>
      </RouteTransition>
    )
  }
}

export default CSSModules(Donate, styles);
