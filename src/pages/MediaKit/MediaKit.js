import React from 'react';
import Helmet from 'react-helmet';
import CSSModules from 'react-css-modules';
import RouteTransition from '../../components/RouteTransition/RouteTransition';

import styles from './MediaKit.css';
import UILayout from 'UILibrary/layout/UILayout';
import UISection from 'UILibrary/layout/UISection';
import UIFlexRow from 'UILibrary/grid/UIFlexRow';

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
                        </UIFlexRow>
                        <UIFlexRow className="p-bottom-6">
                            <h2>The Logo</h2>
                            <button download>Download Logo</button>
                            <h2>The Skull</h2>
                            <h2>Color Palette</h2>
                            Red #ed3b14
                            Dark Grey
                            White
                            <p>
                            Our colors are bold, enthusiastic and full of energy. To ensure a unified brand, it is important to use these colors and these colors only.
                            </p>
                            <h2>Fonts</h2>
                            League Gothic
                            Roboto Slab

                        </UIFlexRow>
                    </UISection>
                </UILayout>
            </RouteTransition>
        );
    }
}

export default CSSModules(MediaKit, styles);
