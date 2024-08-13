function filtrarPorCategoria(produtos, categoria) {
    return produtos.filter(produto => produto.categoria === categoria);
  }
  
  export default function App() {
    const produtos = [
      { nome: "Laptop", categoria: "Eletrônicos" },
      { nome: "Camisa", categoria: "Roupas" },
      { nome: "Smartphone", categoria: "Eletrônicos" }
    ];
  
    const produtosFiltrados = filtrarPorCategoria(produtos, "Eletrônicos");
  
    return (
      <div className="container">
        <h1 className="titulo">Produtos Filtrados</h1>
        <ul className="lista-produtos">
          {produtosFiltrados.map((produto, index) => (
            <li key={index} className="item-produto">
              {produto.nome} - {produto.categoria}
            </li>
          ))}
        </ul>
      </div>
    );
  }