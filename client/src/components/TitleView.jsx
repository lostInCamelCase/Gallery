import React from 'react';
import styles from '../TitleView.css';

const TitleView = ({stayName, rating}) => (
  <div className={styles.title}>
    <h1 >{stayName.placeName}</h1>
    <h3 className={styles.rating}>{rating.stars} ({rating.number_Of_Reviews}) {stayName.location}</h3>
  </div>
);

export default TitleView;
