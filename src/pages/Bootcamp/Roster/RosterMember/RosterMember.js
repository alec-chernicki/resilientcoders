import './RosterMember.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import SideBySide from '../../../../components/Containers/SideBySide/SideBySide';
import SideItem from '../../../../components/Containers/SideBySide/SideItem/SideItem';
import ButtonPrimary from '../../../../components/Buttons/ButtonPrimary';
import ReactZeroClipboard from 'react-zeroclipboard';
import linkIcon from './link_icon.svg';
import swfPath from 'react-zeroclipboard/assets/ZeroClipboard.swf';

const COPY_BUTTON_STATE = {
  copy: <img src={linkIcon} alt="copy link to roster member"/>,
  copied: <span>Copied</span>
}

class RosterMember extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      copyButtonText: COPY_BUTTON_STATE.copy
    }

    this.getMailToLink = this.getMailToLink.bind(this);
    this.renderAvailability = this.renderAvailability.bind(this);
    this.getId = this.getId.bind(this);
    this.handleCopyClick = this.handleCopyClick.bind(this);
  }
  componentDidMount() {
    const {hash} = this.props;
    if (hash && hash.replace(/#/g, '') === this.getId()) {
      setTimeout(() => ReactDOM.findDOMNode(this).scrollIntoView(), 150)
    }
  }
  getMailToLink() {
    const {name} = this.props;
    const sendTo = "david@resilientcoders.org"
    const subject = `Requesting more information about ${name}`;
    const body = `I'd like to request more information about hiring ${name}.`

    return `mailto:${sendTo}?subject=${subject}&body=${body}`;
  }
  getId() {
    return this.props.name.replace(/ /g,'');
  }
  renderAvailability() {
    if (this.props.availableForHire) {
      return (
        <div className="roster-member-availability">
          <h3>
            Available for hire
          </h3>
        </div>
      )
    }

    return (
      <div className="roster-member-availability">
        <h3>
          Hired
        </h3>
      </div>
    );
  }
  handleCopyClick() {
    this.setState({
      copyButtonText: COPY_BUTTON_STATE.copied
    });

    setTimeout(() => {
      this.setState({
        copyButtonText: COPY_BUTTON_STATE.copy
      });
    }, 1500);
  }
  renderCopyButton() {
    const url = window.location.origin + window.location.pathname + `#${this.getId()}`;

    return(
      <ReactZeroClipboard
        text={url}
        swfPath={swfPath}
      >
        <button className="roster-member-copy" onClick={this.handleCopyClick}>
          {this.state.copyButtonText}
        </button>
      </ReactZeroClipboard>
    );
  }
  renderControls() {
    return (
      <div className="roster-controls">
        {this.renderAvailability()}
        {this.renderCopyButton()}
      </div>
    )
  }
  render() {
    const {image, name, bio} = this.props;

    return (
      <SideBySide id={this.getId} className="roster-member">
        <SideItem flush={true}>
          <img src={image} />
          {this.renderControls()}
        </SideItem>
        <SideItem className="p-y">
          <h2>
            {name}
          </h2>
          <p>
            {bio}
          </p>
          <ButtonPrimary href={this.getMailToLink()}>
            Request more info
          </ButtonPrimary>
        </SideItem>
      </SideBySide>
    )
  }
}

export default RosterMember;
