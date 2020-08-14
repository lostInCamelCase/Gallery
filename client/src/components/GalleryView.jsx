import React from 'react';
import styles from '../GalleryView.css';

const GalleryView = ({image, handleClose}) => (
  <img className={styles.images} src={image.images} ></img>
);

export default GalleryView;
