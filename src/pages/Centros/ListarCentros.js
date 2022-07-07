import React,{useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scss/listar.scss';
import Swal from 'sweetalert2';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import {HiLocationMarker}  from 'react-icons/hi';
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

function ListarCentros() {

  const [dataCentro, setdataCentro] = useState([]);
  const [classe,setClasse] = useState("");
  const utilizador = localStorage.getItem('user');
  const tipoGestor = utilizador.TiposGestorId; 

  const Navigate = useNavigate();

  useEffect(()=>{
    axios.get('centros/list')
    .then(res=>{
      if(res.data.sucesso){
        setdataCentro(res.data.data)
      }else{
        alert("Error Web Service");
      }
    })
  },[])

  useEffect(()=>{
    if(tipoGestor===1){
      setClasse("botao_adicionar pt-1 h-75 w-25 mt-2 invisible")
    }else{
      setClasse("botao_adicionar pt-1 h-75 w-25 mt-2")
    }
  },[tipoGestor])

  useEffect(() => {
        LoadData();
  },[]); 

  return (
    <Container fluid>
      <Row className='mt-3'>
        <Col className='mt-2 d-flex justify-content-center' md={1}>
            <IconContext.Provider value={{ color: "white", size:'30px', style: { verticalAlign: 'middle'}}}>
                <div className='pt-2 icon_box d-flex justify-content-center'>
                  <HiLocationMarker/>
                </div>
            </IconContext.Provider>
        </Col>
        <Col className='px-0 d-flex justify-content-start'>
          <h1 className='Titulo_Pagina pt-2'>Lista de Centros</h1>
        </Col>
        <Col className='mx-3 d-flex justify-content-end'>
          <Button className={classe} onClick={()=>Navigate('/home/centros/add')}>
          Adicionar Centro
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className='mx-3'>
          <Table className="tabela " striped borderless hover variant="light" responsive="sm" size="sm">
            <thead>
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Endereço</th>
                    <th scope="col">Horário</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">Estado</th>
                    <th colSpan={5}>Ações</th>
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

  function LoadData() {
        axios.get('centros/list')
        .then(res => {
            if(res.data.sucesso){
                const data = res.data.data;
                    setdataCentro(data);
            }else{
                alert("Error Web Service!");
            }
        })
        .catch(error => {
            alert(error)
        });
    } 

    function SendAtivarDesativar(id, estado){
        if(estado === 1){ 
          axios.put('centros/desativar/' + id)
          .then(res => {
            if(res.data.sucesso){
              Swal.fire(
                    'Sucesso!',
                    'O centro foi desativado',
                    'success'
                )
                LoadData()
            }
          })
          .catch ( error => {
            alert("Error "+error)
          })
        }else{
          axios.put('centros/ativar/' + id)
          .then(res => {
            if(res.data.sucesso){
              Swal.fire(
                    'Sucesso!',
                    'O centro foi ativado',
                    'success'
                )
                LoadData()
            }
          })
          .catch ( error => {
            alert("Error "+error)
          })
        }
    }

    function onAtivarDesativar(id, estado){
      if(estado===1){
        Swal.fire({
            title: 'Deseja desativar este centro?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Concluir',
            cancelButtonText: 'Cancelar',
            closeOnConfirm: false,
            closeOnCancel: false
        })
        .then((result) => {
            if (result.value) {
                SendAtivarDesativar(id, estado)
            } 
        })
      }else{
        Swal.fire({
            title: 'Deseja ativar este centro?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Concluir',
            cancelButtonText: 'Cancelar',
            closeOnConfirm: false,
            closeOnCancel: false
        })
        .then((result) => {
            if (result.value) {
                SendAtivarDesativar(id, estado)
            } 
        })
      }
    }

    function SendDelete(id)
    {
        axios.post('centros/delete/' + id)
        .then(response =>{
            if (response.data.sucesso) {
                Swal.fire(
                    'Eliminado!',
                    'O centro foi eliminado',
                    'success'
                )
                LoadData()
            }
        })
        .catch ( error => {
            alert("Error "+error)
        })
    }


    function OnDelete(id){
        Swal.fire({
            title: 'Deseja eliminar este centro?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Concluir',
            cancelButtonText: 'Cancelar',
            closeOnConfirm: false,
            closeOnCancel: false
        })
        .then((result) => {
            if (result.value) {
                SendDelete(id)
            } 
        })
    } 

    function LoadTableData(){
        let botaoEstado = ""

        return dataCentro.map((data, index)=>{

            if(data.Estado.descricao === "Ativo")
              botaoEstado = "Desativar"
            else
              botaoEstado = "Ativar"

            return(
                <tr key={index}>
                    <td>{data.Nome}</td>
                    <td>{data.Endereco}</td>
                    <td>{data.Hora_abertura + '-' + data.Hora_fecho}</td>
                    <td>{data.Telefone}</td>
                    <td>{data.Estado.descricao}</td>
                    <td>
                        <Link className="btn btn-warning botaoAcao" to={"/home/centros/edit/" + data.id}>Editar</Link>
                    </td>
                    <td>
                        <button className="btn btn-danger botaoAcao" type="button" onClick={()=>OnDelete(data.id)}>Eliminar</button>
                    </td>
                    <td>
                        <button className="btn btn-primary botaoAcao" type="button" onClick={()=>onAtivarDesativar(data.id,data.Estado.id)}>{botaoEstado}</button>
                    </td>
                </tr>
            )
        });
    }
}

export default ListarCentros