import React from 'react';
import {mount, shallow} from 'enzyme';

import App from '../client/src/components/App.jsx';
import PictureList from '../client/src/components/PictureList.jsx';

describe('<App/>', () => {
  it('renders <PictureList/> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
  // it('should get the States properties', () => {
  //   const wrapper = mount(<App />);
  //   expect(wrapper).toHaveState('pictures');
  //   // expect(wrapper).toHaveState('ratings');
  //   // expect(wrapper).toHaveState({pictures: []});
  // })
})
