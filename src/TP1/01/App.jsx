import React, { useState } from 'react';

function calcularPrecoTotal(preco, quantidade) {
  return preco * quantidade;
}

export default function App() {
  const [preco, setPreco] = useState(0);
  const [quantidade, setQuantidade] = useState(0);
  const [precoTotal, setPrecoTotal] = useState(0);

  const handleCalcular = () => {
    const total = calcularPrecoTotal(preco, quantidade);
    setPrecoTotal(total);
  };

  return (
    <div className='Codigo'>
      <h1>Calculadora de Preço Total</h1>
      <div>
        <label>
          Preço do Produto: 
          <input 
            type="number" 
            value={preco} 
            onChange={(e) => setPreco(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Quantidade Comprada: 
          <input 
            type="number" 
            value={quantidade} 
            onChange={(e) => setQuantidade(parseInt(e.target.value))}
          />
        </label>
      </div>
      <button onClick={handleCalcular}>Calcular Preço Total</button>
      <div>
        <h2>Preço Total: R$ {precoTotal.toFixed(2)}</h2>
      </div>
    </div>
  );
}
