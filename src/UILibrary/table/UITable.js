import React, { PropTypes } from 'react';
import styles from './UITable.css';
import CSSModules from 'react-css-modules';

const UITable = ({children, className}) => {
  return (
    <table styleName="table" className={className}>
      {children}
    </table>
  )
};

UITable.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CSSModules(UITable, styles);
