import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import logo from '../../images/Logo_Softinsa.png';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

import '../../scss/LandingPage.scss'
import { Link } from "react-router-dom";

function NavBarLandingPage() {

    return (
        <section className='Menu'>
            <Navbar className='py-0'> 
                <Container>
                    <Link to="/">
                        <Image className='Brand' src={logo}></Image>
                    </Link>
                </Container>
                <Container className="justify-content-end">
                    <Button href="/login" variant="primary" size="lg" className='mx-5 px-5 py-1'>Login</Button>
                </Container>
            </Navbar>
        </section>
    )
}

export default NavBarLandingPage