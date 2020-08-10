import React from 'react';
import PictureList from './PictureList.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pictures: []
    }
  }
  getPictures() {

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