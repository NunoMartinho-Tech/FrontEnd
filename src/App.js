import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import NavBar from './components/NavBar';
import Dasboard from './pages/dashboard';
import ListUtilizadores from './pages/list_utilizadores';
import ListSalas from './pages/list_sala';
import ListCentros from './pages/list_centros';
import AddUtilizadores from './pages/add_utilizador';
import AddSalas from './pages/add_sala';
import AddCentros from './pages/add_centro';
import EditUtilizadores from './pages/edit_utilizador';
import EditSalas from './pages/edit_sala';
import EditCentros from './pages/edit_centro';
import Login from './pages/Login';

function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/" exact element={<Dasboard />}/>
        <Route path="/utilizadores/list" element={<ListUtilizadores/>}/>
        <Route path="/utilizadores/add" element={<AddUtilizadores />}/>
        <Route path="/utilizadores/get/:id" element={<EditUtilizadores />}/>
        <Route path="/salas/list" element={<ListSalas />}/>
        <Route path="/salas/add" element={<AddSalas/>}/>
        <Route path="/salas/get/:id" element={<EditSalas/>}/>
        <Route path="/centros/list" element={<ListCentros/>}/>
        <Route path="/centros/add" element={<AddCentros/>}/>
        <Route path="/centros/get/:id" element={<EditCentros/>}/>
      </Routes>
    </Router>
  );
}

export default App;
