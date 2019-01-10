import React, { Component } from 'react';
import { Card, CardImg, CardTitle,CardImgOverlay,Button, Modal, ModalHeader} from 'reactstrap';
import EditForm from './EditForm'
import {Link} from 'react-router-dom'

class StoryCard extends Component {
  state={
    modalEdit: false
  }
  
  _toggleEdit = () => {
    this.setState({
      modalEdit: !this.state.modalEdit
    });
  }

  _handleDelete = () => {
      this.props._deleteStory(this.props.oneStory.id)
    }
  render(){
  return (
    <Link to={`/StoryPage/${this.props.oneStory.id}`}>
    <Card inverse style={{backgroundColor: '#333', borderColor: '#333', margin: '10px 0px'}}>
    < CardImg height="60%" width="100%" style={{opacity:".6"}} src={this.props.oneStory.story_img} alt="Card image cap" />
    <CardImgOverlay>
    <CardTitle> <h6>{this.props.oneStory.title}</h6> </CardTitle>
    {this.props.isMine ? <Button onClick={this._toggleEdit}>Edit Story</Button> :  <div></div>}
      {this.props.isMine ? <Button onClick={this._handleDelete}>Delete Story</Button> :  <div></div>}
      </CardImgOverlay>
      <Modal isOpen={this.state.modalEdit} toggle={this._toggleEdit} >
      <ModalHeader toggle={this._toggleEdit}>Post A Story</ModalHeader>
      <EditForm _patchStory={this.props._patchStory} oneStory={this.props.oneStory} user={this.props.user}/>
      </Modal>
      </Card>
    </Link>
    )
  }
}

export default StoryCard