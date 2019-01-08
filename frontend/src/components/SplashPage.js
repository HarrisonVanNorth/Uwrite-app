import React from 'react';
import Header from './Header'
import Login from './Login'
import { Row, Col, Container } from 'reactstrap';

const SplashPage = (props) => {
  return (
    <div>
    <Header/>
    <Container>
    <Row className='col-6'>
    <Col>
    <Login authors={props.authors} history={props.history}/>
    </Col>
    </Row>
    </Container>
    </div>
  )
}

export default SplashPage