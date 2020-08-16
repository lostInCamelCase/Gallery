import React from 'react';
import {mount, shallow} from 'enzyme';
import GalleryView from '../client/src/components/GalleryView.jsx';

describe('Gallery component', () => {
  const imageObj =
    {
      "id": 326,
      "images": "https://homepictures.s3-us-west-1.amazonaws.com/image10.jpg",
      "caption": "",
      "stay_id": 14
    };
  it('GalleryView component should exist', () => {
    const wrapper = mount(<GalleryView image={imageObj}/>);
    expect(wrapper).toBeTruthy();
  });

  it('should get the picture object data', () => {

  const wrapper = shallow(<GalleryView image={imageObj} />);
  // console.log(wrapper.props().children[0].props.src)
  expect(wrapper.props().children.props.src).toEqual('https://homepictures.s3-us-west-1.amazonaws.com/image10.jpg');

  });
})