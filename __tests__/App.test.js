import React from 'react';
import {mount, shallow} from 'enzyme';
import App from '../client/src/components/App.jsx';



describe('<App/> component', () => {
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
  it('create snapshot of App component', () => {

    const wrapper = shallow(<App infoState={infoState}/>);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render App component', () => {
    const wrapper = shallow(<App infoState={infoState}/>);
    expect(wrapper).toBeDefined();
  })
})
