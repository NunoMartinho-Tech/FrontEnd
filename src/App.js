import React from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom"
import './scss/app.scss'

import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoutes';
import Dashboard from './pages/Dashboard';
import LogOut from './pages/Leave';
import PublicRoutes from './components/PublicRoutes';




function App() {

  return (
    <Router>
        <Routes>

          {/* Rotas publicas */}
            <Route path='/' element={<PublicRoutes/>}>
              <Route index element={<LandingPage/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path="*" element={<> not found</>} />
          </Route>

          {/* Rotas Privadas */}
              <Route path='/home' element={<ProtectedRoute/>}>
                <Route path='dashboard' element={<Dashboard/>}/>
                <Route path='leave' element={<LogOut/>} />
                <Route path="*" element={<> not found</>} />
            </Route>

        </Routes>
    </Router>
  );
}

export default App;
