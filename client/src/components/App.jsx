import React from 'react';
import PictureList from './PictureList.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pictures: [],
      ratings: [],
      stayName: ''
    }
  }

  componentDidMount() {
    this.getStayName();
    this.getRatings();
    this.getPictures();

  }
  // setInfo(data) {
  //   this.setState({stayName: data });
  // }

  // setImages(data) {
  //   this.setState({pictures: data });
  // }

  // setRatings(data) {
  //   this.setState({ratings: data });
  // }
  getStayName() {
    axios.get('/stay')
      .then(response => {
        this.setState({stayName: response.data });
      })
      .catch( err => {
        console.log('error',err)
      })
  };
  getPictures() {
    axios.get('/stay/pictures')
      .then(response => {
        this.setState({pictures: response.data });
      })
      .catch( err => {
        console.log('error',err)
      })
  };
  getRatings() {
    axios.get('/stay/ratings')
      .then(response => {
        this.setState({ratings: response.data });
      })
      .catch( err => {
        console.log('error',err)
      })
  };


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