import React from 'react';
import './CartaoProduto.css';

function CartaoProduto({ produto }) {
  return (
    <div className="cartao-produto">
      <img src={produto.imagem} alt={produto.nome} className="imagem-produto" />
      <h3 className="nome-produto">{produto.nome}</h3>
      <p className="descricao-produto">{produto.descricao}</p>
      <p className="preco-produto">{produto.preco}</p>
    </div>
  );
}

export default CartaoProduto;