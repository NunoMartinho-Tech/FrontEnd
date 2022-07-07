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

function EditSala() {

  const [DataSala, setDataSala] = useState([])
  const [Nome, setNome] = useState("");
  const [Capacidade, setCapacidade] = useState("");
  const [Alocacao, setAlocacao] = useState("");
  const [Tempo_Limpeza, setTempo_Limpeza] = useState("");
  const [Motivo_Bloqueio, setMotivo_Bloqueio] = useState("");
  const [CentroId, setCentroId] = useState("");
  const [CentroString, setCentroString] = useState("");
  const [Centros,setCentros] = useState([]);
  const Navigate = useNavigate();

  const{id} = useParams();

  useEffect(()=>{
    axios.get("salas/get/" + id)
    .then(res=>{
      if(res.data.sucesso){
        const Data = res.data.data[0];
        setNome(Data.Nome);
        setCapacidade(Data.Capacidade);
        setAlocacao(Data.Alocacao);
        setTempo_Limpeza(Data.Tempo_Limpeza);
        setMotivo_Bloqueio(Data.Motivo_Bloqueio);
        setCentroId(Data.CentroId);
        setCentroString(Data.Centro.Nome);
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
          <h1 className='Titulo_Pagina pt-2'>Editar Sala </h1>
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
              <Form.Label className='formulario-label-input'>Capacidade</Form.Label>
              <br/>
              <Form.Control size="sm" type="text" value={Capacidade} onChange={(value) => setCapacidade(value.target.value)} className='formulario-input'/>
            </Form.Group>

            {/**Telefone */}
            <Form.Group>
              <Form.Label className='formulario-label-input'>Alocacao</Form.Label>
              <br/>
              <Form.Control size="sm" type="text" value={Alocacao} onChange={(value) => setAlocacao(value.target.value)} className='formulario-input'/>
            </Form.Group>

            {/**Horario */}
            <Form.Group>
              <Form.Label className='formulario-label-input'>Tempo_Limpeza</Form.Label>
              <br/>
              <Form.Control size="sm" type="text" value={Tempo_Limpeza} onChange={(value) => setTempo_Limpeza(value.target.value)} className='formulario-input'/>
            </Form.Group>

            <Form.Group className='pb-3'>
              <Form.Label className='formulario-label-input'>Motivo Bloqueio</Form.Label>
              <br/>
              <Form.Control size="sm" type="text" value={Motivo_Bloqueio} onChange={(value) => setMotivo_Bloqueio(value.target.value)} className='formulario-input'/>
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
            title: 'Deseja editar esta sala?',
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
        else if (Capacidade==="") {
            Swal.fire('Insira uma capacidade')
        }
        else  if(Alocacao===""){
            Swal.fire('Insira uma alocação')
        }
        else  if(Tempo_Limpeza===""){
            Swal.fire('Insira um tempo de limpeza')
        }
        else  if(CentroId===0){
            Swal.fire('Escolha um centro')
        }
        else  if(Motivo_Bloqueio===""){
            Swal.fire('Insira um motivo de bloqueio')
        }
        else {
            const datapost = {
                    Nome : Nome,
                    Capacidade : Capacidade,
                    Alocacao: Alocacao,
                    TempoLimpeza: Tempo_Limpeza,
                    Centro: CentroId
            }
            axios.put("salas/edit/"+id,datapost)
            .then(response=>{
                if (response.data.sucesso===true) {
                    Swal.fire(
                        'Sucesso!',
                        'A sala foi atualizada',
                        'success'
                    );
                }
                else {
                    Swal.fire(
                    'Erro!',
                    'Não foi possível atualizar a sala',
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

export default EditSala