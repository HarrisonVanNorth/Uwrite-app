import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    authors: [],
    stories: [],
    comments: []
  }

  async componentDidMount() {
    const res = await fetch('http://localhost:8000/')
    const json = await res.json()
    this.setState({
      authors: json[0],
      stories: json[1],
      comments: json[2]
    })
  }

  //   createMessage = async (input) => {
  //   const response = await fetch('http://localhost:8082/api/messages', {
  //     method: 'POST',
  //     body: JSON.stringify(input),
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //     }
  //   })
  //   const message = await response.json()
  //   this.setState({messages: [...this.state.messages, message], modal: false})
  // }

  // async patchMessage(input) {
  //   const response = await fetch('http://localhost:8082/api/messages', {
  //     method: 'PATCH',
  //     body: JSON.stringify(input),
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //     }
  //   })
  //   const message = await response.json()
  //   this.setState({messages: message})
  // }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default App;
