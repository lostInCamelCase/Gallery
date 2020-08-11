import React from 'react';
import axios from 'axios';
import PictureList from './PictureList.jsx';
import TitleView from './TitleView.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      ratings: [],
      stayName: '',
    };
  }

  componentDidMount() {
    this.getStayName();
    this.getRatings();
    this.getPictures();
  }

  getStayName() {
    axios.get('/stay')
      .then((response) => {
        this.setState({ stayName: response.data[0] });
      })
      .catch((err) => {
        console.log('error', err);
      });
  }

  getPictures() {
    axios.get('/stay/pictures')
      .then((response) => {
        this.setState({ pictures: response.data });
      })
      .catch((err) => {
        console.log('error', err);
      });
  }

  getRatings() {
    axios.get('/stay/ratings')
      .then((response) => {
        this.setState({ ratings: response.data[0] });
      })
      .catch((err) => {
        console.log('error', err);
      });
  }

  render() {
    return (
      <div>
        <TitleView stayName={this.state.stayName} rating={this.state.ratings}/>
        <PictureList pictures={this.state.pictures}/>
      </div>
    );
  }
}

export default App;
