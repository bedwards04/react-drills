import React,{ Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      sports: ["Basketball", "Picklball", "Spikeball", "Rock Climbing", "Longboarding"]
    };
  }
  render() {
    let sportsToDisplay = this.state.sports.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });
    return <div className="App">{sportsToDisplay}</div>
  }
}



export default App;
