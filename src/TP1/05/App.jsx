function encontrarProdutoPorNome(produtos, nome) {
    return produtos.find(produto => produto.nome === nome);
  }
  
  export default function App() {
    const produtos = [
      { nome: "Laptop", preco: 1000 },
      { nome: "Tablet", preco: 400 },
      { nome: "Smartphone", preco: 1500 }
    ];
  
    const produtoEncontrado = encontrarProdutoPorNome(produtos, "Laptop");
  
    return (
      <div className="container">
        <h1>Produto Encontrado:</h1>
        {produtoEncontrado ? (
          <div className="produto">
            <p>Nome: {produtoEncontrado.nome}</p>
            <p>Preço: R${produtoEncontrado.preco}</p>
          </div>
        ) : (
          <p>Produto não encontrado</p>
        )}
      </div>
    );
  }