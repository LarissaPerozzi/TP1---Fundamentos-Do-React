function calcularTotalItens(itens) {
    return itens.reduce((acc, item) => acc + item.quantidade * item.precoUnitario, 0);
  }
  
  export default function App() {
    const itens = [
      { nome: "Laptop", quantidade: 1, precoUnitario: 1000 },
      { nome: "Tablet", quantidade: 2, precoUnitario: 400 },
      { nome: "Smartphone", quantidade: 1, precoUnitario: 1500 },
    ];
  
    const total = calcularTotalItens(itens);
  
    return (
      <div className="container">
        <h1 className="titulo">Total do Carrinho: R$ {total}</h1>
      </div>
    );
  }