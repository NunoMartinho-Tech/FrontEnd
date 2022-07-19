import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import '../../scss/dashboard.scss'

function Limpeza(props) {

    const [data, setdata] = useState([])

    useEffect(()=>{
        console.log(props.centroid)
        axios.get('centros/salasporlimpar/'+props.centroid)
        .then(res=>{
            console.log(res)
            if(res.data.sucesso){
                console.log(res.data.data)
                setdata(res.data.data)
            }
        })
    },[props.centroid])

    useEffect(() => {
        LoadTableData();
    },[]);

  return (
    <Container className='TabelasSalasPorLimpar'>
        <Row>
            <Col className='d-flex justify-content-center'>
                <p className='pt-4'>Salas por Limpar</p>
            </Col>
        </Row>
        <Row>
            <Col>
                <Table className="tabelaSalasPorLimpar" striped bordered hover variant="light" responsive="sm" size="sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                        <LoadTableData/>
                    </tbody>
                </Table>
            </Col>
        </Row>
    </Container>
  )

  function LoadTableData(){

        return data.map((data, index)=>{

            return(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{data.Nome}</td>
                </tr>
            )
        });
    }
}

export default Limpeza