import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './Header'
import Feed from './Feed'
// import StoryForm from './components/StoryForm'
const ProfilePage = ({}) => {

  return (
      <div>
      <Header/>
      <Container>
        <Row>
          <Col>
            <Feed 
            />
          </Col>
          <Col>

          </Col>
        </Row>
      </Container>
      </div>
  )
}

export default ProfilePage