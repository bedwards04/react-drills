import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      filterString: "",
      sports: ["basketball", "pickleball", "spikeball", "rock climbing", "longboarding"]
    };
  }

  handleChange(filter) {
    this.setState({filterString: filter});
  }
  
  render() {
    let sportsToDisplay = this.state.sports.filter((element, index) => {
      return element.includes(this.state.filterString);
    })
    .map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    })
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />{sportsToDisplay}
      </div>
    );
  }
}


export default App;
