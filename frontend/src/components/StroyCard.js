import React from 'react';
import { Card, CardImg, CardTitle,CardImgOverlay,Button, Modal, ModalHeader} from 'reactstrap';
import EditForm from './EditForm'


const  StoryCard = ({oneStory, comments, authors, isMine, _toggle ,modal, user, _patchStory}) => {
  
    const _handleClick = () => {
      _toggle()
    }

  return (
    <Card inverse style={{backgroundColor: '#333', borderColor: '#333', margin: '10px 0px'}}>
    < CardImg height="60%" width="100%" style={{opacity:".6"}} src={oneStory.story_img} alt="Card image cap" />
      <CardImgOverlay>
      <CardTitle> <h6>{oneStory.title}</h6> </CardTitle>
      {isMine ? <Button onClick={_handleClick}>Edit Story</Button> :  <div></div>}
      </CardImgOverlay>
        <Modal isOpen={modal} toggle={_toggle} >
          <ModalHeader toggle={_toggle}>Post A Story</ModalHeader>
          <EditForm _patchStory={_patchStory} oneStory={oneStory} user={user}/>
        </Modal>
    </Card>
    )
  
}

export default StoryCard