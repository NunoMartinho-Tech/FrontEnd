import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import TopNavBar from '../TopNavBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../scss/Nav.scss';

function NavBar() {

  const[id,setId] = useState(localStorage.getItem("id"));
  const[nome,setNome] = useState("");
  const[foto,setFoto] = useState("");

  return (
    <TopNavBar/>
  )
}

export default NavBar