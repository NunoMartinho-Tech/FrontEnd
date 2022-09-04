import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import '../../scss/dashboard.scss'

function Limpeza(props) {

    const [dataSala, setdataSala] = useState([])
    //const [CentroId, setCentroId] = useState()
    //console.log("Variavel centroId: ",props.centroid)

    useEffect(() => {
        //setCentroId(props.centroid)
        //console.log("CentroId:", CentroId)
        const timer = setInterval(()=>{
            axios.get('centros/salasporlimpar/'+props.centroid)
            .then(res=>{
                console.log("Data: ",res.data)
                if(res.data.sucesso){
                    //console.log("Data: ",res.data.data)
                    setdataSala(res.data.data)
                    //console.log("Variavel data:", dataSala)
                }else{
                    setdataSala([])
                }
            })
            .catch((err=>{console.log("Erro: ",err)}))
        },15000)
        LoadTableData()
        return () => clearInterval(timer)
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
        return dataSala.map((data, index)=>{
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