import React from 'react';
import PictureView from './PictureView.jsx';

const PictureList = ({pictures}) => (
  <div>
   {pictures.map((image) => (
     <PictureView image={image} key={image.id}/>
   ))}
  </div>
);

export default PictureList;
