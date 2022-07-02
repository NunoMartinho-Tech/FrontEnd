import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scss/Nav.scss';
import logo from '../../images/Logo_Softinsa_branco.png'
import imagemPerfil from '../../images/imagesPerfil.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';


function TopNavBar() {
  return (
    <Row>
        <Col className='MenuTop'>
            <Navbar className='py-0'>
                <Container fluid>
                    <Navbar.Brand href="/dashboard" className='w-50'>
                    <img src={logo} className="logo" alt="Softinsa logo"/>
                    </Navbar.Brand>
                </Container>
                <Container className='d-flex justify-content-end'>
                    <Image src={imagemPerfil} className='UtilizadorFoto'/>
                    <Link to='#' className='link'>
                        <Navbar.Text className='text-white '>Nome</Navbar.Text>
                    </Link>
                </Container>
            </Navbar>
        </Col>
    </Row>
  )
}

export default TopNavBar