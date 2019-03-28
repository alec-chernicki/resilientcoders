import React, { PropTypes } from 'react';
import Event from '../../../components/Containers/Event/Event';

import styles from './DemoDay.css';
import CSSModules from 'react-css-modules';
import UIButton from 'UILibrary/button/UIButton';
import RouteTransition from '../../../components/RouteTransition/RouteTransition';
import Helmet from 'react-helmet';

import UILayout from 'UILibrary/layout/UILayout';
import UIImage from 'UILibrary/image/UIImage';
import UISection from 'UILibrary/layout/UISection';
import UICard from 'UILibrary/layout/UICard';
import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';
// import UILayer from 'UILibrary/layer/UILayer';
import UIHero from 'UILibrary/layout/UIHero';
import demoDayHeroImage from './demo_day_hero.png';

class DemoDay extends React.PureComponent {
  render() {
    const heroText = "Looking to hire software engineers? Join us for a wonderful evening and meet the most recent Resilient Coders graduating class."
    return (
        <Event
            metaTitle="Demo Day"
            eid="58142024360"
            title="Demo Day"
            date="April 25, 2019 18:00:00"
            heroText={heroText}
            heroImage={demoDayHeroImage}
        />
    )
  }
}

export default CSSModules(DemoDay, styles);

