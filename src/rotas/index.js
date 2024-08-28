import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TelaCadastroProcessoMei from '../views/Cadastros/ProcessoMEi';
import TelaCadastroFuncionario from '../views/Cadastros/UsuarioPrefeitura';
import DashBoard from '../views/DashBoard';

function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path='/login' element={<h1>login</h1>} />   
                <Route path='/DashBoard' element={<DashBoard/>} />                  
                <Route path='/Cadastro/Processo' element={<TelaCadastroProcessoMei/>} />          
                <Route path='/Cadastro/Funcionario' element={<TelaCadastroFuncionario/>} />     
            </Routes>
        </Router>
    );
}

export default Rotas;