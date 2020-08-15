import React from 'react';
import {mount, shallow} from 'enzyme';
import PictureView from '../client/src/components/PictureView.jsx';

describe('PictureView component', () => {
  const imageObj = [
    {
      "id": 326,
      "images": "https://homepictures.s3-us-west-1.amazonaws.com/image10.jpg",
      "caption": "",
      "stay_id": 14
    },
    {
      "id": 327,
      "images": "https://homepictures.s3-us-west-1.amazonaws.com/image11.jpg",
      "caption": "",
      "stay_id": 14
    },
    {
      "id": 328,
      "images": "https://homepictures.s3-us-west-1.amazonaws.com/image12.jpg",
      "caption": "",
      "stay_id": 14
    },
    {
      "id": 329,
      "images": "https://homepictures.s3-us-west-1.amazonaws.com/image13.jpg",
      "caption": "",
      "stay_id": 14
    },
    {
      "id": 330,
      "images": "https://homepictures.s3-us-west-1.amazonaws.com/image14.jpg",
      "caption": "",
      "stay_id": 14
    }
  ];
  it('PictureView component should exist', () => {
    const wrapper = mount(<PictureView gallery={imageObj}/>);
    expect(wrapper).toBeTruthy();
  });

  it('should get the picture object data', () => {

  const wrapper = shallow(<PictureView gallery={imageObj} />);
  // console.log(wrapper.props().children[0].props.src)
  expect(wrapper.props().children[0].props.src).toEqual('https://homepictures.s3-us-west-1.amazonaws.com/image10.jpg');

  });
})