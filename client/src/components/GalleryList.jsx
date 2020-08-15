import React from 'react';
import GalleryView from './GalleryView.jsx';
import styles from '../GalleryList.css';

const GalleryList = ({ pictures, show, handleClose, left, right, idx, showShare}) => {
  const showHideClassName = show ? 'displayBlock' : 'displayNone';
  if (show === false) {
    return null;
  }
    return (
    <div className={styles.showHideClassName}>
      <div className={styles.modalMain}>
      <button className={styles.closeBtn} onClick={handleClose}> X Close</button>
      <div className={styles.picIdx}>{idx + 1}/{pictures.length}</div>
      <div className={styles.share} onClick={showShare}><i className="fas fa-sign-out-alt"></i></div>
      <div className={styles.heart}><i className="far fa-heart"></i></div>
        <button className={styles.rightBtn} onClick={right}><i className="fa fa-chevron-right" aria-hidden="true"></i></button>
        <button className={styles.leftBtn} onClick={left}><i className="fa fa-chevron-left" aria-hidden="true"></i></button>
        <br></br>
        <GalleryView image={pictures} handleClose={handleClose} idx={idx}/>
        <div className={styles.caption}> {pictures[idx].caption}</div>
      </div>
    </div>
    );
};

export default GalleryList;
