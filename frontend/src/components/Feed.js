import React from 'react';
import StoryCard from './StroyCard'

const Feed = ({authors,stories,comments}) => {

let Card = stories.map((story) => <StoryCard key={story.id} oneStory={story} authors={authors}/> )

  return (
    <div>
      {Card}
    </div>
  )
}

export default Feed