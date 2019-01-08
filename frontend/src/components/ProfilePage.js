import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './Header'
import Feed from './Feed'
import ProfileCard from './ProfileCard'
// import StoryForm from './components/StoryForm'
const ProfilePage = (props) => {

  let user = props.authors.filter(author => author.id === Number(props.match.params.id))[0]
  let subscribedList = props.subscribe.filter(scribedItem => scribedItem.subscriber === Number(props.match.params.id)).map(scribe => scribe.subscribee)

  return (
      <div>
      <Header/>
      <Container>
        <Row>
          <Col>
            {!user ? <p>Loading</p> : <Feed props={props} comments={props.comments} user={user} subscribedList={subscribedList} stories={props.stories}/> }
          </Col>
          <Col>
            {!user ? <p>Loading</p> : <ProfileCard user={user}/>}
          </Col>
        </Row>
      </Container>
      </div>
  )
}

export default ProfilePage