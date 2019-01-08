import React from 'react';
import Header from './Header'
import RegisterForm from './RegisterForm'
import { Row, Col } from 'reactstrap';

const SplashPage = (data) => {
  console.log(data)
  return (
    <div>
    <Header/>
    <Container>
    <Row>
    <Col>
    <RegisterForm/>
    </Col>
    <Col>
    
    </Col>
    </Row>
    </Container>
    </div>
  )
}

export default SplashPage