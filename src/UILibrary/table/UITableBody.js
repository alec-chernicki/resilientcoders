import React, { PropTypes } from 'react';

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
