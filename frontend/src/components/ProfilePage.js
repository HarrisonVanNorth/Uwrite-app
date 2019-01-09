import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './Header'
import Feed from './Feed'
import ProfileCard from './ProfileCard'
import UserStoryList from './UserStoryList'

const ProfilePage = (props) => {

  let user = props.authors.filter(author => author.id === Number(props.match.params.id))[0]
  let subscribedList = props.subscribe.filter(scribedItem => scribedItem.subscriber === Number(props.match.params.id)).map(scribe => scribe.subscribee)

  return (
      <div style={{backgroundColor: "#222"}}>
      <Header />
      <Container >
        <Row>
          <Col>
            {!user ? <p>Loading</p> : <Feed comments={props.comments} user={user} subscribedList={subscribedList} stories={props.stories}/> }
          </Col>
          <Col>
            {!user ? <p>Loading</p> : 
              <ProfileCard 
              user={user} 
              _toggle={props._toggle} 
              modal={props.modal} 
              _createStory={props._createStory}
            />}
            {!user ? <p>Loading</p> : 
              <UserStoryList 
              comments={props.comments} 
              user={user} 
              stories={props.stories} 
              _toggle={props._toggle} 
              _patchStory={props._patchStory} 
              modal={props.modal}
            />}
          </Col>
        </Row>
      </Container>
      </div>
  )
}

export default ProfilePage