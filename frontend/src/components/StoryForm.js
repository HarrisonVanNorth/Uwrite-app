import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class StoryForm extends React.Component {


  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Author</Label>
          <Input type="author" name="author" id="" placeholder="Enter name here" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Title</Label>
          <Input type="title" name="title" id="" placeholder="title" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="category" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}