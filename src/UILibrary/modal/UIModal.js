import styles from './UIModal.css';
import CSSModules from 'react-css-modules';
import Modal from 'react-modal';
import React, { PropTypes } from 'react';
import UIIconButton from 'UILibrary/button/UIIconButton';
import images from 'constants/images';

const customStyles = {
  overlay: {
    zIndex: 10000000,
    backgroundColor: 'rgba(33, 38, 45, 0.85)',
  },
  content: {
    zIndex: 10000001,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
};

class UIModal extends React.Component {
  render () {
    const { children, isOpen, onClose, contentLabel, styles } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        contentLabel={contentLabel}
        style={customStyles}
      >
        <UIIconButton
          image={images.close}
          className={styles['close-button']}
          onClick={onClose}
        />
        {children}
      </Modal>
    );
  }
}

UIModal.defaultProps = {
  isOpen: false,
};

UIModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  contentLabel: PropTypes.string.isRequired,
};

export default CSSModules(UIModal, styles);
