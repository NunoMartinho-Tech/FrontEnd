import React from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom"

import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoutes';
import PublicRoutes from './components/PublicRoutes';

function App() {

  return (
    <Router>
        <Routes>
          {/*Rotas publicas*/}
          <Route path='/' element={<PublicRoutes/>}>
              <Route path='/' element={<LandingPage/>}/>
              <Route path='login' element={<Login/>}/>
          </Route>
          {/*Rotas Privadas*/}
          <Route path='/' element={<ProtectedRoute/>}>
              <Route path='dashboard' element={<Dashboard/>}/>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
