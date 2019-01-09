import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

class EditForm extends Component {
  
  state = {
    story_img: this.props.oneStory.story_img,
    title: this.props.oneStory.title,
    content: this.props.oneStory.content,
    category: this.props.oneStory.category,
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
    console.log(this.state)
    this.props._patchStory(this.state)
  }
  
  render() {
    
    const oneStory = this.props.oneStory
    return (
      <Form className="col-12" onSubmit={this._handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Img Url</Label>
          <Input name="story_img" onChange={this._handleChange} placeholder={oneStory.story_img} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Title</Label>
          <Input name="title" onChange={this._handleChange} placeholder={oneStory.title} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Category</Label>
          <Input type="select" name="category" onChange={this._handleChange}>
            <option defaultValue>{oneStory.category}</option>
            <option>Video Games</option>
            <option>Science</option>
            <option>Tech</option>
            <option>Business</option>
            <option>World</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="content" placeholder={oneStory.content} onChange={this._handleChange}/>
        </FormGroup>
        <Button className="col-12">Submit</Button>
      </Form>
    );
  }
}

export default EditForm