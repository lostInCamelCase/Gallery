import React from 'react';
import styles from '../TitleView.css';

const TitleView = ({stayName, rating}) => (
  <div className={styles.title}>
    <h2>{stayName.placeName}</h2>
    <div className={styles.rating}>{rating.stars}  ({rating.number_Of_Reviews})</div>
    <div className={styles.location}>{stayName.location}</div>
  </div>
);

export default TitleView;
