import React from 'react';
import StoryCard from './StroyCard'

const UserStoryList = ({stories,comments, user, _toggle, _patchStory, modal}) => {

let filteredstories = stories.filter(story => story.author_id === user.id)
let Card = filteredstories.map(story => 
  <StoryCard key={story.id} 
    oneStory={story} 
    _patchStory={_patchStory}
    comments={comments} 
    isMine={true} 
    _toggle={_toggle} 
    modal={modal} 
    user={user}
  />)

  return (
    <div>
      {Card}
    </div>
  )
}

export default UserStoryList