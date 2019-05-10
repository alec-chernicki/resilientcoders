import React from 'react';
import styles from './Graduates.css';
import CSSModules from 'react-css-modules';
import RouteTransition from '../../../components/RouteTransition/RouteTransition';
import Helmet from 'react-helmet';
import {Link} from 'react-router';

import UILayout from 'UILibrary/layout/UILayout';
import UISection from 'UILibrary/layout/UISection';
import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';
import UIContentButton from 'UILibrary/button/UIContentButton';
import UIButton from 'UILibrary/button/UIButton';
import ButtonNext from 'UILibrary/button/_core/ButtonNext';

import rosterconfig from '../Roster/rosterMembersConfig';
import cohortConfig from '../Roster/cohortConfig';

class Graduates extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            spolightCoder: 0
        }
        this.spotlight = rosterconfig.filter(coder => coder.spotlight)
    }
    onPrevButtonClick() {
        let prevState = this.state;
        let { spolightCoder } = prevState;
        if (spolightCoder > 0) {
            spolightCoder -=  1;
            console.log(spolightCoder);
        }
        console.log(this.state);
        console.log(this.state.spolightCoder);
        this.setState({
            spolightCoder: spolightCoder,
        });
    }
    onNextButtonClick() {
        let prevState = this.state;
        let {spolightCoder} = prevState;
        if (spolightCoder < (this.spotlight.length - 1) ) {
            spolightCoder += 1;
        }
        console.log(this.state);
        console.log(this.state.spolightCoder);
        this.setState({
            spolightCoder: spolightCoder,
        });
    }
    renderCohort(cohort) {
        return cohort.map((coder, key) => {
            return (
                <UIFlex
                    key={key}
                    basis="24%"
                    grow={0}
                    shrink={0}
                    className="m-bottom-4"
                >
                    <Link
                        key={key}
                        to={`/graduates/${coder.url}` }
                    >
                        <UIContentButton
                            use="secondary"
                            image={coder.image}
                            title={coder.name}
                        />
                    </Link>
                </UIFlex>
            );
        })
    }
    renderCohorts() {
        const coders19a = rosterconfig.filter(coder => coder.cohort === cohortConfig[2019].a);
        const coders18c = rosterconfig.filter(coder => coder.cohort === cohortConfig[2018].c);
        const coders18b = rosterconfig.filter(coder => coder.cohort === cohortConfig[2018].b);
        const coders18a = rosterconfig.filter(coder => coder.cohort === cohortConfig[2018].a);
        const coders17c = rosterconfig.filter(coder => coder.cohort === cohortConfig[2017].c);
        const coders17a = rosterconfig.filter(coder => coder.cohort === cohortConfig[2017].a);
        const cohorts = [coders19a, coders18c, coders18b, coders18a, coders17c, coders17a];
        return cohorts.map((cohort, key) => {
            return (
                <UILayout use="secondary" key={key}>
                    <UISection className="p-y-6">
                        <h2>{cohort[0].cohort}</h2>
                        <UIFlexRow justify="space-between">
                            { this.renderCohort(cohort) }
                        </UIFlexRow>
                    </UISection>
                </UILayout>
            );
        })

    }
    render() {
        let { spolightCoder } = this.state;
        return (
            <RouteTransition>
                <Helmet title="Graduates" />
                <UILayout use="secondary">
                    <UISection className="p-top-of-page">
                        <UIFlexRow className="p-top-6 p-bottom-6">
                            <UIFlex>
                                <h2>
                                    Meet&nbsp;{this.spotlight[spolightCoder].name}
                                </h2>
                                <p>
                                    {this.spotlight[spolightCoder].spotlight.description}
                                </p>
                                <UISection>
                                    <ButtonNext 
                                        direction="LEFT" 
                                        onClick={this.onPrevButtonClick.bind(this)}
                                        disabled={!spolightCoder}
                                    />
                                    <ButtonNext 
                                        direction="RIGHT" 
                                        onClick={this.onNextButtonClick.bind(this)}
                                    />
                                </UISection>
                            </UIFlex>
                            <UIFlex>
                                Video or Image... <a href="https://www.lewagon.com/graduates" target="_blank">Inspiration for this page</a>
                            </UIFlex>
                        </UIFlexRow>
                    </UISection>
                </UILayout>
                
                <UILayout use="tertiary">
                    <UISection className="p-top-3 p-bottom-3 text-center">
                        <h1 className="text-white">Our Graduates</h1>
                    </UISection>
                </UILayout>
                
                {this.renderCohorts()}
            </RouteTransition>
        );
    }
}

export default CSSModules(Graduates, styles);