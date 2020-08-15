import React from 'react';
import {mount, shallow} from 'enzyme';
import TitleView from '../client/src/components/TitleView.jsx';

describe('TitleView component', () => {
  it('TitleView component should exist', () => {
    const wrapper = mount(<TitleView stayName={{}} rating={{}} />);
    expect(wrapper).toBeTruthy();
  });

  it('should get the info object data', () => {
    const infoObj = {
        "id": 85,
        "placeName": "Enchanting Loft With Wifi/Netflix",
        "location": "Avondale, Arizona, United States"
    };
    const ratingObj = {
      "id": 85,
      "number_Of_Reviews": 39,
      "stars": 3.2,
      "stay_id": 85,
      "superHost": "Superhost"
    }
  const wrapper = shallow(<TitleView stayName={infoObj} rating={ratingObj}/>);
  expect(wrapper.props().children[0].props.children).toEqual("Enchanting Loft With Wifi/Netflix");
  })
})