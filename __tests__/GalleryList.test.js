import React from 'react';
import {mount, shallow} from 'enzyme';
import GalleryList from '../client/src/components/GalleryList.jsx';

describe('GalleryList component', () => {
  const imageObj =
    {
      "id": 326,
      "images": "https://homepictures.s3-us-west-1.amazonaws.com/image10.jpg",
      "caption": "",
      "stay_id": 14
    };
  it('GalleryView component should exist', () => {
    const wrapper = mount(<GalleryList pictures={imageObj}/>);
    expect(wrapper).toBeTruthy();
  });
})