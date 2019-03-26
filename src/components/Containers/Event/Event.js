import moment from 'moment-timezone';

import CSSModules from 'react-css-modules';
import React from 'react';
import Helmet from 'react-helmet';
import classNames from 'classnames';
import UIButton from 'UILibrary/button/UIButton';
import styles from './Event.css';

import RouteTransition from '../../RouteTransition/RouteTransition';

import UIImage from 'UILibrary/image/UIImage';
import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';
import UIHero from 'UILibrary/layout/UIHero';
import UILayout from 'UILibrary/layout/UILayout';
import UISection from 'UILibrary/layout/UISection';

import axios from 'axios';


class Event extends React.PureComponent {
  state = {
    daysUntil: 0,
    description: "",
    capacity: "",
    status: "",
    summary: "",
    is_free: ""
  }
  componentDidMount() {
    moment.tz.setDefault("America/New_York");

    this.setDaysUntil();
    this.getEvent(this.props.eid);    
  }
  setDaysUntil() {
    this.setState({
      daysUntil: moment(this.props.date).diff(moment(), 'days')
    })
  }
  setEvent(eventState) {
    let prevState = this.state;
    prevState.description = eventState.description;
    prevState.capacity = eventState.capacity;
    prevState.status = eventState.status;
    prevState.summary = eventState.summary;
    prevState.is_free = eventState.is_free;
    this.setState(prevState);
  }

  getEvent(eid) {
    const baseUrl = "https://www.eventbriteapi.com/v3";
    const endpoint = `/events/${eid}/?token=H6N2EVFMB4WRL7MRFCDA`;
    const _this = this;

    axios({
        url: endpoint,
        method: 'GET',
        baseURL: baseUrl,
      })
      .then((response) => {
        console.log(response.data);
        let eventState = {
          description: response.data.description.text,
          capacity: response.data.capacity,
          status: response.data.status,
          summary: response.data.summary,
          is_free: response.data.is_free,
        }
        _this.setState(eventState);
        // return res.json(response.data);
      })
      .catch((e) => {
        console.log("Problem with request " + e.message)
        // return res.sendStatus(500)
      })
  }
  render() {
    const { metaTitle, title, date, heroImage, heroText, } = this.props;
    let { daysUntil } = this.state;
    return (
      <RouteTransition>
        <Helmet title={metaTitle} />
        <UIHero
          type="secondary"
          image={heroImage}
          titleOne={title}
          text={heroText}
          to="https://www.eventbrite.com/e/resilient-coders-demo-day-tickets-58142024360?ref=ebtnebregn"
          buttonText="Register Now"
        />
        <UILayout use="primary">
          <UISection>
            <h2 className="m-bottom-3 m-sm-bottom-6">
              {title}
            </h2>
            <h4>
              {daysUntil} days until {title}
            </h4>
            <h2>
              {this.state.is_free} | {this.state.status} | {this.state.summary} | {this.state.capacity}
            </h2>
          </UISection>
        </UILayout>
      </RouteTransition>
    )
  }
}

Event.defaultProps = {
    title: "Event Name",
    date: moment().add(30, 'd').format(),
    to: "/events/"
}

export default CSSModules(Event, styles);
