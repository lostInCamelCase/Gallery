import React from 'react';
import styles from '../saveModal.css';

const SaveModal = ({showModal, handleClose, image}) => {
   const showHideClassName = showModal ? 'displayShare' : 'displayShareNone';
  if (showModal === false) {
    return null;
  }
    return (
    <div className={styles.showHideClassName}>
      <div className={styles.saveModal}>
        <button className={styles.closeBtn} onClick={handleClose}> X </button>
        <div className={styles.title}> Save to a list</div>
        <div className={styles.line1}>____________________________________________________________________</div>

          <img className={styles.image} src={image[5].images} alt="list1 picture"></img>
          <div className={styles.text}>
            <div className={styles.anytime}> Any time </div>
            <div className={styles.list1}> List 1 </div>
            <div className={styles.stays}> 2 Stays </div>

        </div>
        <div className={styles.line2}>____________________________________________________________________</div>
        <div className={styles.createList}> Create a list</div>
        </div>
    </div>
    );
};

export default SaveModal;
