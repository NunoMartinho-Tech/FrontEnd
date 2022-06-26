import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import AuthService from "./auth.service";
import { useNavigate } from "react-router-dom";

const required = (value) =>{
  if(!value){
    return(
      <div className="alert alert-danger" role="alert" >
        Este Campo é de preenchimento obrigatório
      </div>
    );
  }
};

export default function LoginComponent(){
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const [message, setmessage] = useState("");
  const navigate = useNavigate("");

  return(
    <Form onSubmit={HandleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Insira o seu email"  value={email} onChange={(value) => setemail(value.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        value={password} onChange={(value) => setpassword(value.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit" >
        Submit
      </Button>

      {message && (
        <div className="form-group">
          <div className="alert alert-danger" role="alert">{message}</div>
        </div>)} 
      </Form>
  );

  async function HandleLogin(event){
    if(email===0){
      alert("Insira um email!")
    }else if(password === 0){
      alert("Insira uma palavra passe!")
    }else{
      event.preventDefault();
      setmessage("");
      setloading(true);

      AuthService.login(email,password)
      .then((res)=>{
        if(res === "" || res === false){
          setmessage("Autenticação falhou");
          setloading(false);
        }else{
            navigate("/");
        }
      })
      .catch((error) =>{
        setmessage("Autenticação falhou.");
        setloading(false);
      })
    }
  }
}


