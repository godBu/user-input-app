import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    allUserNames: [],
    currentUserName: ""
  }

  takeUserInput = (event) => {
    this.setState({
      currentUserName: event.target.value
    })
  }

  addUser = () => {
    this.setState({
      allUserNames: [...this.state.allUserNames, this.state.currentUserName],
      currentUserName: ""
    })
  }

  render() {
    const eachUserName = this.state.allUserNames.map((username, index) => {
      return <p key={index}>{username}</p>
    })

    return (
      <div className="App">
        {eachUserName}
      <input value={this.state.currentUserName} onChange={this.takeUserInput} />
      <button onClick={this.addUser}>Add Number</button>
      </div>
    );
  }
}  

export default App;
