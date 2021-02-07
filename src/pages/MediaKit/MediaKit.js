import React from 'react';
import Helmet from 'react-helmet';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import RouteTransition from '../../components/RouteTransition/RouteTransition';

import styles from './MediaKit.css';
import UIButton from 'UILibrary/button/UIButton';
import UILayout from 'UILibrary/layout/UILayout';
import UISection from 'UILibrary/layout/UISection';
import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';

import logosConfig from './logosConfig';


class MediaKit extends React.PureComponent {
    renderLogos() {
        return logosConfig.map((logo, key) => {
            return (
                <div styleName="media-logo" key={key}>
                    <img src={logo.image} alt={logo.alt} />
                    <UIButton download href={logo.image} type="link" className="text-center">
                        Download Logo
                    </UIButton>
                </div>
            );
        });
    }
    render() {
        return (
            <RouteTransition>
                <Helmet title="Media Kit" />
                <UILayout className="p-top-of-page p-bottom-6" use="secondary">
                    <UISection className="p-top-6">
                        <h1 className="text-darkest">Resilient Coders Brand Guidelines</h1>
                        <UIFlexRow>
                            <p>This is the hub for all brand guidelines, usages, and assets. We built this page to make it as easy as possible for you to deliver on-brand designs while respecting our brand and legal/licensing restrictions.</p>
                        </UIFlexRow>
                    </UISection>
                </UILayout>
                <UILayout className="p-top-6" use="primary">
                    <UISection>
                        <UIFlexRow className="p-top-6">
                            <UISection>
                            <h2>Our Logo: The Skull</h2>
                            <p>Delmarism about the skull and it's meaning and greatness</p>
                            </UISection>
                            {this.renderLogos()}
                        </UIFlexRow>
                     
                        <UIFlexRow className="p-top-6">
                            <h2>Our Colors: </h2>
                            <p>Our colors are bold, enthusiastic and full of energy. To ensure a unified brand, it is important to use these colors and these colors only.</p>
                            <div styleName="media-color-primary" className="m-r-1 m-y-1">#ED1B24</div>
                            <div styleName="media-color-secondary" className="m-r-1 m-y-1">#21262D</div>
                        </UIFlexRow>
                        <UIFlexRow justify="space-between">
                            <div styleName="media-color-gray-0" className="m-r-1 m-y-1">#EAEEF5</div>
                            <div styleName="media-color-gray-1" className="m-r-1 m-y-1">#EDEEF0</div>
                            <div styleName="media-color-gray-2" className="m-r-1 m-y-1">#DDDDDD</div>
                            <div styleName="media-color-gray-3" className="m-r-1 m-y-1">#CCCCCC</div>
                            <div styleName="media-color-gray-4" className="m-r-1 m-y-1">#4F5A60</div>
                            <div styleName="media-color-gray-5" className="m-r-1 m-y-1">#21262D</div>
                        </UIFlexRow>
                        <h2>Fonts</h2>
                        <h6>League Gothic</h6>
                        <p>Roboto Slab</p>
                    </UISection>
                </UILayout>
            </RouteTransition>
        );
    }
}

export default CSSModules(MediaKit, styles);
