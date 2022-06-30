import React, { Component, useState } from 'react'
import { Navigate } from "react-router-dom"

function Login({isAuth: isAuth,  ...rest}) {

  const[loggedIn,SetloggedIn] = useState(false);
  const[Error,SetError] = useState("");

  if(loggedIn){
    return (<Navigate to="/home/dashboard" />)
  }else{
    return (
    <div>Login</div>
    )
  }
}

export default Login