import React from 'react';
import ShareModal from './ShareModal.jsx';
import styles from '../ShareModal.css';

const ShareModal = () => {
   const showHideClassName = show ? 'displayShare' : 'displayShareNone';
  if (show === false) {
    return null;
  }
    return (
    <div className={styles.showHideClassName}>

    </div>
    );
};

export default ShareModal;
