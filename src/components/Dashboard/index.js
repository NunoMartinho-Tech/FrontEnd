import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import SideBar from '../NavBar/SideBar';
import Estatisticas from '../Estatisticas';

function Dashboard() {

  return (
    <>
    <Row>
      <Col>
        <SideBar/>
      </Col>
      <Col md={11}>
          <Estatisticas/>
      </Col>
    </Row>
    </>
  )
}

export default Dashboard