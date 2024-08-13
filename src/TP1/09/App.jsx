import React from 'react';
import './App.css';

function agruparPorCategoria(produtos) {
  return produtos.reduce((acc, produto) => {
    const { categoria, nome } = produto;
    if (!acc[categoria]) {
      acc[categoria] = [];
    }
    acc[categoria].push(nome);
    return acc;
  }, {});
}

export default function App() {
  const produtos = [
    { nome: "Laptop", categoria: "Eletrônicos" },
    { nome: "Camisa", categoria: "Roupas" },
    { nome: "Smartphone", categoria: "Eletrônicos" },
    { nome: "Calça", categoria: "Roupas" },
    { nome: "Fone de Ouvido", categoria: "Eletrônicos" }
  ];

  const produtosAgrupados = agruparPorCategoria(produtos);

  return (
    <div className="container">
      <h1 className="titulo">Produtos Agrupados por Categoria</h1>
      <div className="categorias">
        {Object.keys(produtosAgrupados).map(categoria => (
          <div key={categoria} className="categoria">
            <h2>{categoria}</h2>
            <ul>
              {produtosAgrupados[categoria].map(nome => (
                <li key={nome}>{nome}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
