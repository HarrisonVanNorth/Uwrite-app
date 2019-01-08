import React from 'react';
import { Card, CardImg, CardTitle, CardText } from 'reactstrap';


const  StoryCard = ({oneStory, comments, authors}) => {
  console.log(oneStory)

  return (
    <Card body inverse style={{backgroundColor: '#333', borderColor: '#333'}}>
    <CardTitle> <h6>{oneStory.title}</h6> </CardTitle>
    < CardImg height="60%" width="100%" src={oneStory.story_img} alt="Card image cap" />
    <CardText> 
    </CardText>
    </Card>
    )
  
}

export default StoryCard