import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }
  
  handleChange(val) {
    this.setState({message: val})
  }
  
  render() {
      return (
      <div className="App">
          <input type="text" onChange = {(e) => this.handleChange(e.target.value)}/>
          <p>{this.state.message}</p>
      </div>
    );
  }
  
}

export default App;
