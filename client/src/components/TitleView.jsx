import React from 'react';
import styles from '../TitleView.css';

const TitleView = ({stayName, rating, showShare, showSave}) => {

  if (rating.superHost === 'host') {
    return (
      <div className={styles.title}>
    <h2>{stayName.placeName}</h2>
    <div className={styles.rating}>{rating.stars}  ({rating.number_Of_Reviews})</div>
    <div className={styles.star}><i className="fas fa-star"></i></div>
    <div className={styles.medal}><i className="fas fa-medal"></i></div>
    <div className={styles.location2}>{stayName.location}</div>
    <div className={styles.share}>
      <div className={styles.shareIcon}>
        <i className="fas fa-sign-out-alt"></i>
      </div>
      <div className={styles.shareText} onClick={showShare}>Share</div>
    </div>
    <div className={styles.save} onClick={showSave}><i className="far fa-heart"></i> Save</div>
  </div>
  )};

  return (
    <div className={styles.title}>
      <h2>{stayName.placeName}</h2>
      <div className={styles.rating}>{rating.stars}  ({rating.number_Of_Reviews})</div>
      <div className={styles.star}><i className="fas fa-star"></i></div>
      <div className={styles.medal}><i className="fas fa-medal"></i></div>
      <div className={styles.host}>{rating.superHost}</div>
      <div className={styles.location}>{stayName.location}</div>
      <div className={styles.share}>
        <div className={styles.shareIcon}>
          <i className="fas fa-sign-out-alt"></i>
        </div>
        <div className={styles.shareText} onClick={showShare}>Share</div>
      </div>
      <div className={styles.save} onClick={showSave}><i className="far fa-heart"></i> Save</div>
    </div>
  );
  }
export default TitleView;
