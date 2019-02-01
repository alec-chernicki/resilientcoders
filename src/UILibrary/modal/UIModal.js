import styles from './UIModal.css';
import CSSModules from 'react-css-modules';
import React, { PropTypes } from 'react';
import UIIconButton from 'UILibrary/button/UIIconButton';
import images from 'constants/images';
import Modal from 'react-responsive-modal';

class UIModal extends React.Component {
  render () {
    const { children, isOpen, onClose, contentLabel, styles } = this.props;

    return (
      <Modal 
        open={isOpen} onClose={onClose}
        classNames={{ overlay: styles.customOverlay, modal: styles.customModal }}
        showCloseIcon={false}
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
