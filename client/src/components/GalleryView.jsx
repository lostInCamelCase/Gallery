import React from 'react';
import styles from '../GalleryView.css';

const GalleryView = ({image}) => (
  <div className={styles.picContainer}>
    <img className={styles.images} src={image.images} ></img>
  </div>
);

export default GalleryView;
