import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom"

import LandingPage from './components/LandingPage';
import UserHome from './components/Home'
import Login from './components/Login';
import ProtectedRoute from './components/Routes/private';
import axios from "axios";

function App() {

  const[isAuth,SetIsAuth] = useState(false);
  const[user,SetUser] = useState("");

  function getUser (data) {
        axios.get('utilizadores/get',{params:data})
        .then(
          res =>{
            SetUser(res.data.data)
          })
        .catch(error=>{
          alert("Error:" + error)
        })
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

          <Route path="/home" element={<ProtectedRoute path="/home" component={()=>{<UserHome user={user} setUser={SetUser}/>}} isAuth={isAuth}/>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
