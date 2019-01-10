import React from 'react';
import { Container, Row, Col, Card, CardText, CardImg, CardTitle, Button} from 'reactstrap';
import Header from './Header'
import CommentCard from './CommentCard'

const StoryPage = (props) => {
console.log(props.match.params.id)

//   let filteredComments = comments.filter(comment => comment.story_id === id)
// console.log(filteredComments)
// let Card = filteredComments.map(story => 
//   <CommentCard key={comment.id} 
//   />)

  return (
    <div>
      <Header/>
      <Container>
        <Row>
          <Col>
            <Card>
              <CardImg></CardImg>
              <CardTitle></CardTitle>
              <CardText></CardText>
            </Card>
          </Col>
          <Col>
          </Col>  
        </Row>
      </Container>
    </div>

  )
}

export default StoryPage