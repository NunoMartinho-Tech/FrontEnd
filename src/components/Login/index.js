import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from '../../images/Logo_Softinsa.png';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import '../../scss/LandingPage.scss'
import { Link, Navigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';

function Login(props) {

  const[loggedIn,SetloggedIn] = useState(false);
  const[Error,SetError] = useState("");

    return (
      <>
        <Container fluid >
          <Row>
            <Col className='d-flex justify-content-center'>
              <Link to='/'><Image src={logo} className="logo_Login"/></Link>
            </Col>
          </Row>
          <Row>
            <Col className='d-flex justify-content-center'>
              <p className='h3 Login'>Login</p>
            </Col>
          </Row>
          <Row>
            <Col>
            
            </Col>
          </Row>
        </Container>
      </>
    )

}

export default Login