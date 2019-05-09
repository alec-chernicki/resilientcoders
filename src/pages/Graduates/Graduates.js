import React from 'react';
import styles from './Graduates.css';
import CSSModules from 'react-css-modules';
import RouteTransition from '../../components/RouteTransition/RouteTransition';
import Helmet from 'react-helmet';

import UILayout from 'UILibrary/layout/UILayout';
import UISection from 'UILibrary/layout/UISection';
import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';

class Graduates extends React.PureComponent {
    render() {
        return (
            <RouteTransition>
                <Helmet title="Graduates" />
                <UILayout use="secondary">
                    <UISection className="p-top-of-page">
                        <UIFlexRow className="p-bottom-6">
                            <UIFlex>
                                Paragraph and carousel cycle through button
                            </UIFlex>
                            <UIFlex>
                                Video or Image... <a href="https://www.lewagon.com/graduates" target="_blank">Inspiration for this page</a>
                            </UIFlex>
                        </UIFlexRow>
                    </UISection>
                </UILayout>
                <UILayout use="tertiary">
                    <UISection className="p-top-6 p-bottom-6">
                        <h1 className="text-white">Our Graduates</h1>
                    </UISection>
                </UILayout>
            </RouteTransition>
        );
    }
}

export default CSSModules(Graduates, styles);