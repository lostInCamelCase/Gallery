import React from 'react';
import PictureList from './PictureList.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pictures: [],
      ratings: []
    }
  }

  ComponentDidMount() {
    this.getPictures();
  }
  getPictures() {
    // axios.get('/stay')
  }


  render() {
    return (
      <div>
        Hello World
        <div id="checked"></div>
        <PictureList/>
      </div>
    );
  }
}

export default App;