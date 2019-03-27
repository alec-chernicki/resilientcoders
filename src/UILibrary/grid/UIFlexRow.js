import React from 'react';
import PropTypes from 'prop-types';
import styles from './UIFlexRow.css';
import CSSModules from 'react-css-modules';

class UIFlexRow extends React.Component {
  render () {
    const { align, justify, direction, children, className, wrap } = this.props;
    const styles = {
      alignItems: align,
      justifyContent: justify,
      flexDirection: direction,
      flexWrap: wrap,
    };

    return (
      <div
        className={className}
        styleName="flex-row"
        style={styles}
      >
        {children}
      </div>
    );
  }
}

UIFlexRow.defaultProps = {
  wrap: 'wrap',
};

UIFlexRow.propTypes = {
  align: PropTypes.string,
  justify: PropTypes.string,
  direction: PropTypes.string,
  children: PropTypes.node.isRequired,
  wrap: PropTypes.string,
};

export default CSSModules(UIFlexRow, styles);
