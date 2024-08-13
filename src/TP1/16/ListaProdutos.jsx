import React from 'react';
import CartaoProduto from './CartaoProduto';
import './ListaProdutos.css';

function ListaProdutos() {
  const produtos = [
    {
      nome: "Tênis de Corrida",
      descricao: "Tênis confortável para corridas diárias.",
      preco: "R$ 299,90",
      imagem: "https://via.placeholder.com/150"
    },
    {
      nome: "Camisa de Ciclismo",
      descricao: "Camisa respirável para ciclistas.",
      preco: "R$ 129,90",
      imagem: "https://via.placeholder.com/150"
    },
    {
      nome: "Boné Esportivo",
      descricao: "Boné ajustável para proteção solar.",
      preco: "R$ 59,90",
      imagem: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div className="lista-produtos">
      {produtos.map((produto, index) => (
        <CartaoProduto key={index} produto={produto} />
      ))}
    </div>
  );
}

export default ListaProdutos;