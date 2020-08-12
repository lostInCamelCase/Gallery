import React from 'react';
import GalleryView from './GalleryView.jsx';

const GalleryList = ({pictures}) => (
  <div>
   {pictures.map((image) => (
     <GalleryView image={image} key={image.id}/>
   ))}
  </div>
);

export default GalleryList;
