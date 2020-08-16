import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

// Attach App to the DOM, replacing the div with ID app
const infoState = {
  gallery: [{
    "id": 458,
    "images": "https://homepictures.s3-us-west-1.amazonaws.com/awards-grey-box-large.jpg",
    "caption": "",
    "stay_id": 20
},
{
    "id": 459,
    "images": "https://homepictures.s3-us-west-1.amazonaws.com/awards-grey-box-large.jpg",
    "caption": "",
    "stay_id": 20
},
{
    "id": 460,
    "images": "https://homepictures.s3-us-west-1.amazonaws.com/awards-grey-box-large.jpg",
    "caption": "",
    "stay_id": 20
},
{
  "id": 461,
  "images": "https://homepictures.s3-us-west-1.amazonaws.com/awards-grey-box-large.jpg",
  "caption": "",
  "stay_id": 20
},
{
  "id": 462,
  "images": "https://homepictures.s3-us-west-1.amazonaws.com/awards-grey-box-large.jpg",
  "caption": "",
  "stay_id": 20
},
{
  "id": 463,
  "images": "https://homepictures.s3-us-west-1.amazonaws.com/awards-grey-box-large.jpg",
  "caption": "",
  "stay_id": 20
}
]
}
ReactDOM.render(<App infoState={infoState}/>, document.getElementById('app'));
