import React from 'react';
import styles from '../PictureView.css';

const PictureView = ({gallery, openModal}) =>
  (
  <div className={styles.imageContainer}>
    <img className={styles.largeImages} src={gallery[0].images} onClick={() => openModal(0)}></img>
    <img className={styles.smallIntImage} src={gallery[1].images} onClick={() => openModal(1)}></img>
    <img className={styles.smallIntImage} src={gallery[2].images} onClick={() => openModal(2)}></img>
    <img className={styles.smallEndImageTop} src={gallery[3].images} onClick={() => openModal(3)}></img>
    <img className={styles.smallEndImageBot} src={gallery[4].images} onClick={() => openModal(4)}></img>
    <button className={styles.showAllBtn} onClick={() => openModal(0)}>Show all photos</button>
  </div>
);

export default PictureView;
