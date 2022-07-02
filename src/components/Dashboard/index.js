import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/esm/Container';
import NavBar from '../NavBar';

function Dashboard() {

  return (
    <Container fluid>
      <NavBar/>
      Dashboard do administrador
    </Container>
  )
}

export default Dashboard