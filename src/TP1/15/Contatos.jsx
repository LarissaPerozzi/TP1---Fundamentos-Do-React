import React from 'react';
import './Contatos.css';

function Contatos() {
  return (
    <section className="contatos">
      <h2>Contatos</h2>
      <p>Email: exemplo@dominio.com</p>
      <p>LinkedIn: <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">linkedin.com/in/exemplo</a></p>
      <p>GitHub: <a href="https://github.com" target="_blank" rel="noopener noreferrer">github.com/exemplo</a></p>
    </section>
  );
}

export default Contatos;