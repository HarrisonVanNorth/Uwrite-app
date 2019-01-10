import React from 'react';
import StoryCard from './StroyCard'

const UserStoryList = ({stories,comments, user, _patchStory, _deleteStory}) => {

let filteredstories = stories.filter(story => story.author_id === user.id)
console.log(filteredstories)
let Card = filteredstories.map(story => 
  <StoryCard key={story.id} 
    oneStory={story} 
    _deleteStory={_deleteStory}
    _patchStory={_patchStory}
    comments={comments} 
    isMine={true} 
    user={user}
  />)

  return (
    <div>
      {Card}
    </div>
  )
}

export default UserStoryList