import React from 'react';
import './CartaoPerfil.css';

function CartaoPerfil() {
  const perfil = {
    nome: "João da Silva",
    descricao: "Desenvolvedor Front-End apaixonado por tecnologia e design.",
    imagem: "https://via.placeholder.com/150"
  };

  return (
    <div className="cartao-perfil">
      <img src={perfil.imagem} alt={`${perfil.nome} perfil`} className="imagem-perfil" />
      <h2 className="nome">{perfil.nome}</h2>
      <p className="descricao">{perfil.descricao}</p>
    </div>
  );
}

export default CartaoPerfil;