import React, { Component } from 'react';
import SplashPage from './components/SplashPage'
import ProfilePage from './components/ProfilePage'

// import StoryForm from './components/StoryForm'
import {Switch, Route} from 'react-router-dom'


class App extends Component {
  state = {
    authors: [],
    stories: [],
    comments: [],
    subscribe: []
  }

  async componentDidMount() {
    let resA = await fetch('http://localhost:8000/authors')
    let resB = await fetch('http://localhost:8000/stories')
    let resC = await fetch('http://localhost:8000/comments')
    let resD = await fetch('http://localhost:8000/subscribe')

    let jsonA = await resA.json()
    let jsonB = await resB.json()
    let jsonC = await resC.json()
    let jsonD = await resD.json()

    this.setState({
      authors: jsonA,
      stories: jsonB,
      comments: jsonC,
      subscribe: jsonD
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
    console.log(this.state.subscribe)
    return (
      <Switch>
      <Route exact path="/" render={props => <SplashPage {...props} authors={this.state.authors} />} />
      <Route exact path="/ProfilePage/:id" render={props => 
        <ProfilePage
        {...props}
        authors={this.state.authors} 
        stories={this.state.stories} 
        comments={this.state.comments}
        subscribe={this.state.subscribe}
        />} 
      />
      </Switch>
    );
  }
}

export default App;
