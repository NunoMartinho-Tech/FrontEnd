import React from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom"
import './scss/app.scss'

import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import LogOut from './pages/Leave';
import Dashboard from './pages/Dashboard';

import ListarCentros from './pages/Centros/ListarCentros';
import AdicionarCentros from './pages/Centros/AddCentro';
import EditarCentros from './pages/Centros/EditCentro';
import PerfilCentro from './pages/Centros/PerfilCentro';

import ListarSalas from './pages/Salas/ListarSalas';
import AdicionarSalas from './pages/Salas/AddSala';
import EditarSalas from './pages/Salas/EditSala';

import ListarUtilizadores from './pages/Utilizadores/ListUtilizadores';
import AdicionarUtilizadores from './pages/Utilizadores/AddUtilizador';
import EditarUtilizadores from './pages/Utilizadores/EditUtilizador';

import ProtectedRoute from './components/ProtectedRoutes';
import PublicRoutes from './components/PublicRoutes';
import SideBar from "./components/NavBar/SideBar";

function App() {

  return (
    <Router>
      <SideBar>
        <Routes>
          {/* Rotas publicas */}
            <Route path='/' element={<PublicRoutes/>}>
              <Route index element={<LandingPage/>}/>
              <Route path='login' element={<Login/>}/>
              {/**Quando não encontrar o caminho */}
              <Route path="*" element={<> not found</>} />
            </Route>

          {/* Rotas Privadas */}
            <Route exact path='/home' element={<ProtectedRoute/>} >
              <Route path='/home/dashboard' element={<Dashboard/>}/>
              <Route path='/home/leave' element={<LogOut/>} />
              {/**Centros */}
              <Route path='/home/centros/list' element={<ListarCentros/>}/>
              <Route path='/home/centros/add' element={<AdicionarCentros/>}/>
              <Route path='/home/centros/edit/:id' element={<EditarCentros/>}/>
              <Route path='/home/centros/get/:id' element={<PerfilCentro/>}/>
              {/**Salas */}
              <Route path='/home/salas/list' element={<ListarSalas/>}/>
              <Route path='/home/salas/add' element={<AdicionarSalas/>}/>
              <Route path='/home/salas/edit/:id' element={<EditarSalas/>}/>
              {/**Utilizadores */}
              <Route path='/home/utilizadores/list' element={<ListarUtilizadores/>}/>
              <Route path='/home/utilizadores/add' element={<AdicionarUtilizadores/>}/>
              <Route path='/home/utilizadores/edit/:id' element={<EditarUtilizadores/>}/>
              {/**Quando não encontrar o caminho */}
              <Route path="*" element={<> not found</>} />
            </Route>
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
