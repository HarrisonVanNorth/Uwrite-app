import React from 'react';
import { Card, Button, CardTitle, CardText, CardImg, Row ,Modal, ModalHeader } from 'reactstrap';
import StoryForm from './StoryForm';

const ProfileCard = ({user, _toggle, modal, _createStory}) => {

  const _handleClick = () => {
    _toggle()
  }

  return (
    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
      <CardTitle>{user.user_name}</CardTitle>
      <CardImg width="100%" src={user.user_img} alt="Card image cap" />
      <CardText>{user.bio}</CardText>
      <Row>
        <Button className="col-5">Edit Profile</Button>
        <Button className="col-5" onClick={_handleClick}>Create Story</Button>
                
        <Modal isOpen={modal} toggle={_toggle} >
          <ModalHeader toggle={_toggle}>Post A Story</ModalHeader>
          <StoryForm user={user} _createStory={_createStory} />
        </Modal>
      </Row>
    </Card>
  )
}

export default ProfileCard