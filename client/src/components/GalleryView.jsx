import React from 'react';
import styles from '../GalleryView.css';

const GalleryView = ({ image, handleClose, idx }) => (
  <div className={styles.imagesContainer}>
    <img className={styles.images} src={image[idx].images} alt="picture gallery"></img>
  </div>
);

export default GalleryView;
