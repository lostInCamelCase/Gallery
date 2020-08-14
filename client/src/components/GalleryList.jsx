import React from 'react';
import GalleryView from './GalleryView.jsx';
import styles from '../GalleryList.css';

const GalleryList = ({pictures, show, handleClose}) => {
  let showHideClassName = show ? "displayBlock" : "displayNone";
  if (show === false) {
    return null;
  }
  return(
  <div className={styles.showHideClassName}>
    <div className={styles.modalMain}>
    <button onClick={handleClose}>close</button>
    <br></br>
      {pictures.map((image) => (
        <GalleryView image={image} key={image.id} handleClose={handleClose}/>
      ))}
    </div>
  </div>
  )
};

export default GalleryList;
