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

class MediaKit extends React.PureComponent {
    render() {
        return (
            <RouteTransition>
                <Helmet title="Media Kit" />
                <UILayout className="p-top-of-page p-bottom-6" use="secondary">
                    <UISection>
                        <UIFlexRow className="p-top-12">
                            <h1 className="text-darkest text-center">Resilient Coders Brand Guidelines</h1>
                            <p>This is the hub for all brand guidelines, usages, and assets. We built this page to make it as easy as possible for you to deliver on-brand designs while respecting our brand and legal/licensing restrictions.</p>
                            <h2>The Logo</h2>
                            <button download>Download Logo</button>
                            <h2>The Skull</h2>
                            <h2>Color Palette</h2>
                        </UIFlexRow>
                        <UIFlexRow className="p-bottom-6">
                            <UIFlex>
                                <div styleName="media-color-primary">#ED1B24</div>
                                <div styleName="media-color-secondary">#21262d</div>
                                <div styleName="media-color-gray-0">#EAEEF5</div>
                                <div styleName="media-color-gray-1">#EDEEF0</div>
                                <div styleName="media-color-gray-2">#DDD</div>
                                <div styleName="media-color-gray-3">#CCC</div>
                                <div styleName="media-color-gray-4">#4f5a60</div>
                                <div styleName="media-color-gray-5">#21262d</div>
                            </UIFlex>
                        </UIFlexRow>
                        <UIFlexRow className="p-bottom-6">
                            <p>Our colors are bold, enthusiastic and full of energy. To ensure a unified brand, it is important to use these colors and these colors only.</p>
                        </UIFlexRow>
                        <UIFlexRow wrap="wrap">
                            <h2>Fonts</h2>
                            <h6>League Gothic</h6>
                            <p>Roboto Slab</p>

                        </UIFlexRow>
                    </UISection>
                </UILayout>
            </RouteTransition>
        );
    }
}

export default CSSModules(MediaKit, styles);
