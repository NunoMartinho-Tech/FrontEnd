import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from '../../images/Logo_Softinsa.png';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import '../../scss/LoginPage.scss';
import { useNavigate } from "react-router-dom";


function LogOut () {

    const Navigate = useNavigate();

    return (
        <Container fluid className='Login'>
            <Row >
                <Col className='d-flex justify-content-center col-12'>
                    <Image src={logo} className="logo_Login"/>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center col-12 '>
                    <p className='Login'>Deseja fazer log out?</p>
                </Col>
                <Col className='d-flex justify-content-center mt-3'>
                    <hr className='linha' />
                </Col>
            </Row>
            <Row className='my-3'>
                <Col className='d-flex justify-content-center'>
                    <Button variant="primary" size="lg" type="submit" className='py-0 px-5' 
                    onClick={()=>LogOut()}>Log out</Button>
                </Col>
            </Row>
        </Container>
    )

    function LogOut(){
        localStorage.clear();
        Navigate('/')
    }

}

export default LogOut