function verificarEstoque(produtos) {
    return produtos.filter(produto => produto.quantidadeEmEstoque > 0);
  }
  
  export default function App() {
    const produtos = [
      { nome: "Laptop", quantidadeEmEstoque: 5 },
      { nome: "Tablet", quantidadeEmEstoque: 0 },
      { nome: "Smartphone", quantidadeEmEstoque: 3 }
    ];
  
    const produtosDisponiveis = verificarEstoque(produtos);
  
    return (
      <div className="container">
        <h1 className="titulo">Produtos Disponíveis</h1>
        <ul className="lista-produtos">
          {produtosDisponiveis.map((produto, index) => (
            <li key={index} className="produto">
              {produto.nome} - Quantidade: {produto.quantidadeEmEstoque}
            </li>
          ))}
        </ul>
      </div>
    );
  }