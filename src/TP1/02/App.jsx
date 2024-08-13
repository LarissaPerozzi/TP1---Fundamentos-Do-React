function filtrarDisponiveis(produtos) {
    return produtos.filter(produto => produto.disponivel);
  }
  
  export default function App() {
    const produtos = [ 
      { nome: "Laptop", disponivel: true }, 
      { nome: "Tablet", disponivel: false }, 
      { nome: "Smartphone", disponivel: true } 
    ];
  
    const produtosDisponiveis = filtrarDisponiveis(produtos);
  
    return (
      <div className="container">
        <h1>Produtos Disponíveis</h1>
        <ul>
          {produtosDisponiveis.map((produto, index) => (
            <li key={index}>{produto.nome}</li>
          ))}
        </ul>
      </div>
    );
  }