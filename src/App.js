import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom"

import LandingPage from './components/LandingPage';
import UserHome from './components/Routes/home'
import Login from './components/Login';
import ProtectedRoute from './components/Routes/private';
import axios from "axios";

function App() {

  const[user,SetUser] = useState("");

  function getUser (data) {
        /* const url = "utilizadores/get/ " + data;
        axios.get(url)
        .then(response =>{
          if(response.data.sucesso){
              SetUser(response.data.user)
          }else{
              alert("Erro: User não obtido")
          }
        })
        .catch(error=>{
          alert("Error1:" + error)
        }) */
  }

  useEffect(()=>{
    const data = {
      id: localStorage.getItem("id")
    }
    if(data.id){
      getUser(data)
    }
  })

  return (
    <Router>
      <div>
        <Routes>

          <Route exact path="/" element={user ? <Navigate to="/home/dasboard"/> : <LandingPage/>}/>

          <Route path="/login" element={<Login SetUser={SetUser} />}/>

          <Route path="/home/*" element={<ProtectedRoute path="/home" component={()=>{<UserHome user={user} setUser={SetUser}/>}} isAuth={user}/>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
