import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class Login extends Component {
  state = {
    emailInput: "",
    passwordInput: ""
  }
  
  _handleChange = (e) => {
    const {target} = e
    this.setState(() => {
      return {[target.name]: target.value}
    })
  }
  
  _handleSubmit = (e) => {
    e.preventDefault()
    let user = this.props.authors.filter(author => this.state.emailInput === author.user_email)
    console.log(user[0].id)
    if(user[0].id){
      this.props.history.push(`/ProfilePage/${user[0].id}`)
    } else {
    this.props.history.push('/')
    }
  }
  render(){
    return (
      <Form onSubmit={this._handleSubmit}>
      <h1>Login</h1>
        <FormGroup>
          <Input onChange={this._handleChange} name="emailInput" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Input onChange={this._handleChange} name="passwordInput" placeholder="Password" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default Login