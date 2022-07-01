import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import Eduardo from '../../images/Eduardo.png';

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
            <Row>
                <Col>
                    <Card>
                        {/* <Card.Image variant="top" src={Eduardo} /> */}
                        <Card.Body>
                            <Card.Text>
                                Nuno Martinho
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
    )
}

export default Equipa