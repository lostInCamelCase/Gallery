import React from 'react';
import {mount, shallow} from 'enzyme';

import App from '../client/src/components/App.jsx';
import PictureList from '../client/src/components/PictureList.jsx';


describe('<App/> component', () => {
  it('renders App component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render PictureList', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeDefined();
  })
})
