import React from 'react';
import './Projetos.css';

function Projetos() {
  const projetos = [
    { titulo: 'Projeto 1', descricao: 'Descrição breve do Projeto 1' },
    { titulo: 'Projeto 2', descricao: 'Descrição breve do Projeto 2' },
    { titulo: 'Projeto 3', descricao: 'Descrição breve do Projeto 3' }
  ];

  return (
    <section className="projetos">
      <h2>Projetos</h2>
      <ul>
        {projetos.map((projeto, index) => (
          <li key={index}>
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projetos;