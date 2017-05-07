import React, { PropTypes } from 'react';
import styles from './UITableRow.css';
import CSSModules from 'react-css-modules';

class UITableRow extends React.Component {
  renderWrappedChildren() {
    const { children } = this.props;

    return children.map((child, key) => {
      return (
        <td key={key}>
          {child}
        </td>
      );
    });
  }
  render () {
    return (
      <tr styleName="table-row">
        {this.renderWrappedChildren()}
      </tr>
    );
  }
}

UITableRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CSSModules(UITableRow, styles);
