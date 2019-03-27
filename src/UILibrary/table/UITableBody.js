import React from 'react';
import PropTypes from 'prop-types';

const UITableBody = ({ children }) => {
  return (
    <tbody>
      {children}
    </tbody>
  );
};

UITableBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UITableBody;
