import React from 'react';
import PropTypes from 'prop-types';
import styles from './UITableHeader.css';
import CSSModules from 'react-css-modules';

const UITableHeader = ({title, colSpan}) => {
  return (
    <thead>
      <tr styleName="table-header">
        <th colSpan={colSpan}>
          <h3 className="m-all-0">
            {title}
          </h3>
        </th>
      </tr>
    </thead>
  );
};

UITableHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CSSModules(UITableHeader, styles);
