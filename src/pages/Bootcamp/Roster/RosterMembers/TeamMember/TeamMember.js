import './TeamMember.scss';
import React from 'react';
import classNames from 'classnames';

class TeamMember extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    };
  }
  handleClick() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const {image, name, title, bio} = this.props;
    const teamItemClass = classNames('team-item', {
      'team-item--active': this.state.isOpen
    });

    return (
      <div className={teamItemClass}>
        <div className="team-item__image" style={{backgroundImage: `url(${image})`}} />
        <div className="team-item__overlay">
          <p>
            {bio}
          </p>
        </div>
        <div className="team-item-container">
          <p className="team-item__name">
            {name}
          </p>
          <p className="team-item__title">
            {title}
          </p>
          <button className="team-item__button" onClick={this.handleClick.bind(this)} />
        </div>
      </div>
    )
  }
}

export default TeamMember;
