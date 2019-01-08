import React from 'react';
import { Card, Button, CardTitle, CardText, CardImg, Row } from 'reactstrap';

const ProfileCard = ({user}) => {
  return (
    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
      <CardTitle>{user.user_name}</CardTitle>
      <CardImg width="100%" src={user.user_img} alt="Card image cap" />
      <CardText>{user.bio}</CardText>
      <Row>
        <Button className="col-5">Edit Profile</Button>
        <Button className="col-5">Create Story</Button>
      </Row>
    </Card>
  )
}

export default ProfileCard