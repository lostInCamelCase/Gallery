import React from 'react';
import Component1 from './Component1.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pictures: []
    }
  }
  render() {
    return (
      <div>
        Hello World
        <Component1/>
      </div>
    );
  }
}

export default App;