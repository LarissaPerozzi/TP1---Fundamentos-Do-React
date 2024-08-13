import React from 'react';
import Cabecalho from './Cabecalho';
import Projetos from './Projetos';
import Contatos from './Contatos';
import './App.css';

function App() {
  return (
    <div className="app">
      <Cabecalho />
      <Projetos />
      <Contatos />
    </div>
  );
}

export default App;