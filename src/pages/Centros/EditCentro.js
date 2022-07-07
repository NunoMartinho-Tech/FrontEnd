import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scss/editar.scss';
import Swal from 'sweetalert2';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import {FiEdit}  from 'react-icons/fi';
import { IconContext } from "react-icons";
import { Link, useParams, useNavigate } from "react-router-dom";


function EditCentro() {

  const [Data, setData] = useState([]);
  const [Nome, setNome] = useState("");
  const [Morada, setMorada] = useState("");
  const [Hora_abertura, setHora_abertura] = useState("")
  const [Hora_fecho, setHora_fecho] = useState("")
  const [Telefone, setTelefone] = useState("")
  const Navigate = useNavigate();

  const{id} = useParams();

  useEffect(()=>{
    axios.get("centros/get/" + id)
    .then(res=>{
      if(res.data.sucesso){
        const Data = res.data.data[0];
        setNome(Data.Nome);
        setMorada(Data.Endereco);
        setHora_abertura(Data.Hora_abertura);
        setHora_fecho(Data.Hora_fecho);
        setTelefone(Data.Telefone);
      }else{
        alert("Erro ao obter info do centro");
      }
    })
    .catch(error=>{
      alert(error);
    });
  },[]);


  return (
    <Container fluid>
      <Row className='mt-3'>
        <Col className='mt-2 d-flex justify-content-center' md={1}>
            <IconContext.Provider value={{ color: "white", size:'30px', style: { verticalAlign: 'middle'}}}>
                <div className='pt-2 icon_box d-flex justify-content-center'>
                  <FiEdit/>
                </div>
            </IconContext.Provider>
        </Col>
        <Col className='px-0 d-flex justify-content-start'>
          <h1 className='Titulo_Pagina pt-2'>Editar Centro </h1>
        </Col>
      </Row>
      <Row>
        <Col className=' mt-5 mx-4 d-flex justify-content-start' >
          <div className='formulario'>
            <p className='formulario-titulo'>Formulário</p>
          <Form>
            {/**Nome */}
            <Form.Group>
              <Form.Label className='formulario-label-input'>Nome</Form.Label>
              <br/>
              <Form.Control size="sm" type="text" value={Nome} onChange={(value) => setNome(value.target.value)} className='formulario-input'/>
            </Form.Group>

            {/**Endereco */}
            <Form.Group>
              <Form.Label className='formulario-label-input'>Endereço</Form.Label>
              <br/>
              <Form.Control size="sm" type="text" value={Morada} onChange={(value) => setMorada(value.target.value)} className='formulario-input'/>
            </Form.Group>

            {/**Telefone */}
            <Form.Group>
              <Form.Label className='formulario-label-input'>Telefone</Form.Label>
              <br/>
              <Form.Control size="sm" type="text" value={Telefone} onChange={(value) => setTelefone(value.target.value)} className='formulario-input'/>
            </Form.Group>

            {/**Horario */}
            <Form.Group>
              <Form.Label className='formulario-label-input'>Hora Inicio</Form.Label>
              <br/>
              <Form.Control size="sm" type="text" value={Hora_abertura} onChange={(value) => setHora_abertura(value.target.value)} className='formulario-input'/>
            </Form.Group>

            <Form.Group className='pb-3'>
              <Form.Label className='formulario-label-input'>Hora Fim</Form.Label>
              <br/>
              <Form.Control size="sm" type="text" value={Hora_fecho} onChange={(value) => setHora_fecho(value.target.value)} className='formulario-input'/>
            </Form.Group>
          </Form>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className='my-5 mx-5 d-flex justify-content-end' >
          <Button className='BotaoCancelar d-flex justify-content-center' onClick={()=>Navigate('/home/centros/list')}>Cancelar</Button>
          <Button className='BotaoConfirmar d-flex justify-content-center'onClick={()=>OnUpdate()}>Confirmar</Button>
        </Col>
      </Row>
    </Container>
  )

    function OnUpdate(){
        Swal.fire({
            title: 'Deseja editar este Centro?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        })
        .then((result) => {
            if (result.value) {
                SendUpdate()
            } 
        })
    } 

    function SendUpdate(){
        if (Nome==="") {
            Swal.fire('Insira um nome')
        }
        else if (Morada==="") {
            Swal.fire('Insira uma morada')
        }
        else  if(Telefone===""){
            Swal.fire('Insira um número de telefone')
        }
        else {
            const datapost = {
                    Nome : Nome,
                    Morada : Morada,
                    Telefone: Telefone,
                    Hora_abertura: Hora_abertura,
                    Hora_fecho: Hora_fecho
            }
            axios.put("centros/edit/"+id,datapost)
            .then(response=>{
                if (response.data.sucesso===true) {
                    Swal.fire(
                        'Sucesso!',
                        'O centro foi atualizado',
                        'success'
                    );
                }
                else {
                    Swal.fire(
                    'Erro!',
                    'Não foi possível atualizar o centro',
                    'error'
                )
                }
            })
            .catch(error=>{
                alert("Error: "+error)
            })
        }
    }
}

export default EditCentro