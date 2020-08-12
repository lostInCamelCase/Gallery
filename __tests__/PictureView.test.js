import React from 'react';
import {mount, shallow} from 'enzyme';
import PictureView from '../client/src/components/PictureView.jsx';

describe('PictureView component', () => {
  it('PictureView component should exist', () => {
    const wrapper = mount(<PictureView image={{}}/>);
    expect(wrapper).toBeTruthy();
  });

  it('should get the picture object data', () => {
    const imageObj = {
      "id": 326,
      "images": "https://homepictures.s3-us-west-1.amazonaws.com/image10.jpg",
      "caption": "",
      "stay_id": 14
  };
  const wrapper = shallow(<PictureView image={imageObj} />);
  expect(wrapper.props().children.props.src).toEqual("https://homepictures.s3-us-west-1.amazonaws.com/image10.jpg");
  })
})