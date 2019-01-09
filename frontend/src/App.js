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
    subscribe: [],
    modal: false
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

  _createStory = async (input) => {
    const response = await fetch('http://localhost:8000/stories', {
      method: 'POST',
      body: JSON.stringify(input),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    const stories = await response.json()
    console.log(stories)
    this.setState({stories: [...this.state.stories, stories], modal: false})
  }

  _patchStory = async (input) => {
    console.log("input sent")
    console.log(input)
    const response = await fetch('http://localhost:8000/stories', {
      method: 'PATCH',
      body: JSON.stringify(input),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    const stories = await response.json()
    this.setState({stories: stories})
  }


  _toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }


  render() {
    return (
      <Switch>
      <Route exact path="/" render={props => <SplashPage {...props} authors={this.state.authors} />} />
      <Route exact path="/ProfilePage/:id" render={props => 
        <ProfilePage
        {...props}
        modal={this.state.modal}
        _patchStory={this._patchStory}
        _createStory={this._createStory}
        _toggle={this._toggle}
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
