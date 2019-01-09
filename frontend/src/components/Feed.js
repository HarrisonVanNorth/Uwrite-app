import React from 'react';
import StoryCard from './StroyCard'

const Feed = ({authors,stories,comments,subscribedList}) => {

let filteredstories = stories.filter(story => subscribedList.includes(story.author_id))
let Card = filteredstories.map(story => <StoryCard key={story.id} oneStory={story} authors={authors} comments={comments}/> )

  return (
    <div style={{height: "100%", overflow: "auto"}}>
      {Card}
    </div>
  )
}

export default Feed