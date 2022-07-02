import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';

const useAuth=()=>{
  const id=localStorage.getItem('id')
  if(id){
    return true
  } else {
    return false
  }
}

const ProtectedRoutes=() =>{

  const auth=useAuth()

  return auth?<Outlet/>: <Navigate to="/login"/>
}

export default ProtectedRoutes