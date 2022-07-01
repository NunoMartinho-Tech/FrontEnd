import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import imagem from '../../images/undraw_Real_time_sync_re_nky7.png'
import '../../scss/LandingPage.scss'
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className='hero'>
            <Container>
                <Row className='d-flex align-items-center'>
                    <Col className='justify-content-start'>
                        <p className='h1 mb-3'>Reserve e organize os espaços da sua empresa sem dificuldades</p>
                        <small className='text-muted'> 
                            Um software capaz de gerir os espaços,
                            as pessoas e as reservas em tempo real e com a maior facilidade.
                        </small>
                        <br />
                        {/*Fazer link para a app*/}
                        <Button variant="primary" size="lg" className='px-5 py-1 mt-3'>
                        Fazer download da app
                        </Button>
                    </Col>
                    <Col>
                        <Image src={imagem} className='heroImagem'></Image>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero