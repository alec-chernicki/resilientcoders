import React from 'react';
import Helmet from 'react-helmet';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import RouteTransition from '../../components/RouteTransition/RouteTransition';

import styles from './MediaKit.css';
import UILayout from 'UILibrary/layout/UILayout';
import UISection from 'UILibrary/layout/UISection';
import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';
import logoDark from './brand/svg/resilient_coders_logo_dark.svg';
import logoPrimary from './brand/svg/resilient_coders_logo_primary.svg';
import logo from './brand/svg/resilient_coders_logo_ko.svg';
// logotype
import logotypeDark from './brand/svg/resilient_coders_logo_logotype_dark.svg';
import logotypePrimary from './brand/svg/resilient_coders_logo_logotype_primary.svg';
import logotype from './brand/svg/resilient_coders_logo_logotype_ko.svg';

class MediaKit extends React.PureComponent {
    render() {
        return (
            <RouteTransition>
                <Helmet title="Media Kit" />
                <UILayout className="p-top-of-page p-bottom-6" use="secondary">
                    <UISection className="p-top-6">
                        <h1 className="text-darkest text-center">Resilient Coders Brand Guidelines</h1>
                        <UIFlexRow>
                            <p>This is the hub for all brand guidelines, usages, and assets. We built this page to make it as easy as possible for you to deliver on-brand designs while respecting our brand and legal/licensing restrictions.</p>
                        </UIFlexRow>
                    </UISection>
                </UILayout>
                <UILayout className="p-top-6" use="primary">
                    <UISection>
                        <h2 className="text-white">The Logo</h2>
                        <button download>Download Logo</button>
                        <UIFlexRow className="m-y-1">
                            <UIFlex grow={1}>
                                <img src={logoDark} alt="Resilient Coders logo dark" />
                            </UIFlex>
                            <UIFlex grow={1}>
                                <img src={logoPrimary} alt="Resilient Coders logo primary" />
                            </UIFlex>
                            <UIFlex grow={1}>
                                <img src={logo} alt="Resilient Coders logo" />
                            </UIFlex>
                        </UIFlexRow>
                        <UIFlexRow className="m-y-1">
                            <UIFlex grow={1}>
                                <img src={logotypeDark} alt="Resilient Coders logo dark" />
                            </UIFlex>
                            <UIFlex grow={1}>
                                <img src={logotypePrimary} alt="Resilient Coders logo primary" />
                            </UIFlex>
                            <UIFlex grow={1}>
                                <img src={logotype} alt="Resilient Coders logo" />
                            </UIFlex>
                        </UIFlexRow>
                        <h2 className="text-white">Color Palette</h2>
                        <UIFlexRow>
                            <div styleName="media-color-primary" className="m-r-1 m-y-1">#ED1B24</div>
                            <div styleName="media-color-secondary" className="m-r-1 m-y-1">#21262D</div>
                        </UIFlexRow>
                        <UIFlexRow>
                            <div styleName="media-color-gray-0" className="m-r-1 m-y-1">#EAEEF5</div>
                            <div styleName="media-color-gray-1" className="m-r-1 m-y-1">#EDEEF0</div>
                            <div styleName="media-color-gray-2" className="m-r-1 m-y-1">#DDDDDD</div>
                        </UIFlexRow>
                        <UIFlexRow>
                            <div styleName="media-color-gray-3" className="m-r-1 m-y-1">#CCCCCC</div>
                            <div styleName="media-color-gray-4" className="m-r-1 m-y-1">#4F5A60</div>
                            <div styleName="media-color-gray-5" className="m-r-1 m-y-1">#21262D</div>
                        </UIFlexRow>
                        <UIFlexRow className="p-bottom-6">
                            <p>Our colors are bold, enthusiastic and full of energy. To ensure a unified brand, it is important to use these colors and these colors only.</p>
                        </UIFlexRow>
                        <h2 className="text-white">Fonts</h2>
                        <h6 className="text-white">League Gothic</h6>
                        <p className="text-white">Roboto Slab</p>
                    </UISection>
                </UILayout>
            </RouteTransition>
        );
    }
}

export default CSSModules(MediaKit, styles);
