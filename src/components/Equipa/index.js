import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import Eduardo from '../../images/Eduardo.png';
import Carlos from '../../images/Carlos.png';
import Joao from '../../images/Joao.png';

import '../../scss/LandingPage.scss';

function Equipa() {
    return (
    <section id='#Equipa' className='Equipa'>
        <Container>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <p className='h2 py-4'>Equipa</p>
                    <hr className='border-primary border-2' />
                </Col>
            </Row>
            <Row className='pb-5'>
                <Col className='d-flex justify-content-start mt-4'>
                <Card style={{ width: '15rem' }}>
                        <Card.Body>
                        <Card.Title className= "text-center">Nuno Martinho</Card.Title>
                        <Card.Text class= "text-center">
                                Software Developer
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='d-flex justify-content-center mt-4'>
                    <Card   style={{ width: '13rem' }}>
                        <Card.Img  variant="top" src={Carlos} />
                        <Card.Body>
                        <Card.Title className= "text-center">Carlos Machado</Card.Title>
                            <Card.Text class= "text-center">
                                Software Developer
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='d-flex justify-content-center mt-4'>
                <Card  style={{ width: '13rem' }}>
                        <Card.Img variant="top" src={Eduardo} />
                        <Card.Body >
                        <Card.Title className= "text-center">Eduardo</Card.Title>
                        <Card.Text class= "text-center">
                                Software Developer
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='d-flex justify-content-center mt-4'>
                <Card  style={{ width: '12rem'}}>
                        <Card.Img variant="top" src={Joao}/>
                        <Card.Body>
                        <Card.Title className= "text-center">João Lopes</Card.Title>
                        <Card.Text class= "text-center">
                                Software Developer
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='d-flex justify-content-start mt-4'>
                <Card  style={{ width: '13rem' }}> 
                        <Card.Body>
                        <Card.Title className= "text-center">Francisco</Card.Title>
                        <Card.Text class= "text-center">
                                Software Developer
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row >
        </Container>
    </section>
    )
}

export default Equipa