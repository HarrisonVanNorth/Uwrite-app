import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

class StoryForm extends Component {

  state = {
    story_img: '',
    title: '',
    content: '',
    category: '',
    author_id: this.props.user.id
  }

  _handleChange = (e) => {
  const {target} = e
    this.setState(() => {
      return {[target.name]: target.value}
    })
  }

  _handleSubmit = (e) => {
    e.preventDefault()
    this.props._createStory(this.state)
  }

  render() {

    return (
      <Form className="col-12" onSubmit={this._handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Img Url</Label>
          <Input name="story_img" onChange={this._handleChange} placeholder="Enter name here" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Title</Label>
          <Input name="title" onChange={this._handleChange} placeholder="title" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Category</Label>
          <Input type="select" name="category" onChange={this._handleChange}>
            <option>Video Games</option>
            <option>Science</option>
            <option>Tech</option>
            <option>Business</option>
            <option>World</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="content" onChange={this._handleChange}/>
        </FormGroup>
        <Button className="col-12">Submit</Button>
      </Form>
    );
  }
}

export default StoryForm