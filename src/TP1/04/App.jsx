function filtrarAcimaPreco(produtos, precoMinimo) {
    return produtos.filter(produto => produto.preco > precoMinimo);
  }
  
  export default function App() {
    const produtos = [
      { nome: "Laptop", preco: 1000 },
      { nome: "Tablet", preco: 400 },
      { nome: "Smartphone", preco: 1500 }
    ];
  
    const produtosFiltrados = filtrarAcimaPreco(produtos, 600);
  
    return (
      <div className="container">
        <h1 className="titulo">Produtos com Preço Acima de R$600</h1>
        <ul className="lista-produtos">
          {produtosFiltrados.map((produto, index) => (
            <li key={index} className="produto-item">
              {produto.nome} - R${produto.preco}
            </li>
          ))}
        </ul>
      </div>
    );
  }