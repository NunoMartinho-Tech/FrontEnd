import React from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom"
import './scss/app.scss'

import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import LogOut from './pages/Leave';
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
              <Route path='leave' element={<LogOut/>} />


              <Route path="*" element={<> not found</>} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
