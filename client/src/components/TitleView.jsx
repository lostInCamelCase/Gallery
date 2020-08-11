import React from 'react';
// import PictureView from './PictureView.jsx';

const TitleView = ({stayName, rating}) => (
  <div>
    <h1>{stayName.placeName}</h1>
    <h3>{rating.stars} ({rating.number_Of_Reviews}) {stayName.location}</h3>
  </div>
);

export default TitleView;
