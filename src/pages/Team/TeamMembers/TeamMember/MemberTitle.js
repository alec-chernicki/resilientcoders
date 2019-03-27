import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemberTitle.css';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

const MemberTitle = ({ member, isActive }) => {
  const memberNameClass = classNames({
    'name-inactive': !isActive,
    'name-active': isActive
  });
  const memberTitleClass = classNames({
    'title-inactive': !isActive,
    'title-active': isActive
  });

  return (
    <div styleName="member-title">
      <h2 styleName={memberNameClass} className="m-bottom-1">
        {member.name}
      </h2>
      <h3 styleName={memberTitleClass} className="m-top-0 m-bottom-6">
        {member.role}
      </h3>
    </div>
  );
}

MemberTitle.propTypes = {
  member: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
}

export default CSSModules(MemberTitle, styles);
