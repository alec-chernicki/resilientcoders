import React from 'react';
import PropTypes from 'prop-types';
import styles from './UIFlex.css';
import CSSModules from 'react-css-modules';

class UIFlex extends React.Component {
  render () {
    const { basis, grow, shrink, alignSelf, children, className, style } = this.props;
    const styles = {
      flexBasis: basis,
      flexGrow: grow,
      flexShrink: shrink,
      alignSelf,
      ...style
    };

    return (
      <div
        className={className}
        styleName="flex"
        style={styles}
      >
        {children}
      </div>
    );
  }
}

UIFlex.defaultProps = {
  basis: '0%',
  grow: 1,
  shrink: 1,
};

UIFlex.propTypes = {
  basis: PropTypes.string,
  grow: PropTypes.number,
  shrink: PropTypes.number,
  alignSelf: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default CSSModules(UIFlex, styles);
