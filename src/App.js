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

  useEffect(){
    const data = {
      id: localStorage.getItem("id")
    }
    if(data.id){
      getUser(data)
    }
  }

  return (
    <Router>
      <div>
        <Routes>

          <Route exact path="/">
            if(isAuth){
              <Navigate  to="/home/dasboard"/>
            }else{
              <LandingPage/>
            }
          </Route>

          <Route path="/login">
            <Login isAuth={isAuth}/>
          </Route>

          <ProtectedRoute path="/home" component={()=>{<UserHome user={user} setUser={SetUser}/>}} isAuth={isAuth}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
