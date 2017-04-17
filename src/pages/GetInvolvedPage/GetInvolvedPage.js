import './GetInvolved.scss';
import React from 'react';
import UIButton from 'UILibrary/button/UIButton';
import RouteTransition from '../../components/RouteTransition/RouteTransition';
import CenteredContainerOuter from 'components/Containers/CenteredContainer/CenteredContainerOuter';
import donateImage from './donate.jpg';
import Helmet from 'react-helmet';
import UIImage from 'UILibrary/image/UIImage';
import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';
import UICard from 'UILibrary/layout/UICard';
import UISection from 'UILibrary/layout/UISection';
import GetInvolvedTypes from './GetInvolvedTypes';

const GetInvolvedPage = (props) => {
  return (
    <RouteTransition>
      <Helmet title="Get Involved" />

      <GetInvolvedTypes />

      <CenteredContainerOuter className="p-y-6">
        <UISection>
          <UIFlexRow>
            <UIFlex>
              <UIImage
                type="responsive"
                src={donateImage}
                alt="A group of coders"
              />
            </UIFlex>
            <UIFlex>
              <UICard className="p-all-5">
                <h2>
                  Donate
                </h2>
                <p>
                  Your support allows us to spread code literacy to communities traditionally underrepresented in technology.
                </p>
                <UIButton
                  target="_blank"
                  href="https://www.paypal.me/resilientcoders"
                >
                  Donate Any Amount
                </UIButton>
                <p className="m-top-2">
                  Resilient Coders is a 501(c)(3) organization.
                </p>
              </UICard>
            </UIFlex>
          </UIFlexRow>
        </UISection>
      </CenteredContainerOuter>
    </RouteTransition>
  )
}

export default GetInvolvedPage
