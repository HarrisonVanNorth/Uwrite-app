import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Feed from './components/Feed'
import SplashPage from './components/SplashPage'
import ProfilePage from './components/ProfilePage'

// import StoryForm from './components/StoryForm'
import {Switch, Route} from 'react-router-dom'


class App extends Component {
  state = {
    authors: [],
    stories: [],
    comments: []
  }

  async componentDidMount() {
    let res = await fetch('http://localhost:8000/authors')
    let json = await res.json()
    this.setState({
      authors: json
    })
    res = await fetch('http://localhost:8000/stories')
    json = await res.json()
    this.setState({
      stories: json
    })
    res = await fetch('http://localhost:8000/comments')
    json = await res.json()
    this.setState({
      comments: json
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
      <Switch>
      <Route exact path="/" render={() => <SplashPage authors={this.state.authors} />} />
      <Route exact path="/ProfilePage" render={() => <ProfilePage 
        authors={this.state.authors} 
        stories={this.state.stories} 
        comments={this.state.comments}/>} 
        />
      </Switch>
    );
  }
}

export default App;
