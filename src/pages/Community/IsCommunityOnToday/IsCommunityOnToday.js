import React from 'react';
import styles from './IsCommunityOnToday.css';
import CSSModules from 'react-css-modules';
import RouteTransition from '../../../components/RouteTransition/RouteTransition';
import Helmet from 'react-helmet';

import UILayout from 'UILibrary/layout/UILayout';
import UISection from 'UILibrary/layout/UISection';
import UIFlexRow from 'UILibrary/grid/UIFlexRow';

class IsCommunityOnToday extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            today: new Date().toISOString().slice(0, 10),
        };
    }
    componentDidMount() {
        this.logMessage();
    }
    logMessage = () => {
        let message = `Resilient Coders community is every Tuesday and Thursday, from 3:30pm to 6:00pm. If it is cancelled, you'll see it here`;
        let messageStyles = `background: #21262D; color: #FFF; font-size: medium; padding: 4px;`;
        console.log(`%c${message}`, `${messageStyles}`);
    }
    render() {
        const { today } = this.state;
        const cancelledCommunityDates = new Set([
            // YYYY-MM-DD
            "2019-06-11","2019-08-01","2019-08-15","2019-08-22",
            "2019-11-14","2019-12-12",
            // reference the dates in RC_bootcamp_calendar_2019
        ]);
        const isTuesOrThurs = () => {
            let today = new Date();
            // check if Tuesday (2) or Thursday (4)
            return (today.getDay() === 2 || today.getDay() === 4);
        }
        return (
            <RouteTransition>
                <Helmet title="Is Community Today?" />
                <UILayout styleName="bg-4">
                    <UISection>
                        <UIFlexRow justify="center" className="p-top-24 p-bottom-24 text-center">
                            {
                                isTuesOrThurs(today) && !cancelledCommunityDates.has(today) ?
                                    <h1>Yes</h1> :
                                    <h1>No</h1>
                            }
                        </UIFlexRow>
                    </UISection>
                </UILayout>
            </RouteTransition>
        )
    }
}

export default CSSModules(IsCommunityOnToday, styles);
