import React from 'react';
import axios from 'axios';
import PictureList from './PictureList.jsx';
import PictureView from './PictureView.jsx';
import TitleView from './TitleView.jsx';
import styles from '../App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      gallery: this.props.infoState.gallery,
      ratings: [],
      stayName: '',
    };
  }

  componentWillMount() {
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
        this.setState({ pictures: response.data }, () => {});
        this.setState({ gallery: response.data.slice(0,6) }, () => {});
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
      <div className={styles.container}>
        <TitleView stayName={this.state.stayName} rating={this.state.ratings}/>
        <div className={styles.pictureContainer}>
        <PictureView gallery={this.state.gallery}/>
        </div>

        {/* <Gallery pictures={this.state.pictures}/> */}
      </div>
    );
  }
}

export default App;
