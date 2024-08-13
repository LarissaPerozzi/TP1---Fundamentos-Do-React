function calcularMediaAvaliacoes(avaliacoes) {
  const soma = avaliacoes.reduce((acc, avaliacao) => acc + avaliacao, 0);
  return soma / avaliacoes.length;
}

function App() {
  const avaliacoes = [4, 5, 3, 4, 5];
  const media = calcularMediaAvaliacoes(avaliacoes);

  return (
    <div className="container">
      <h1 className="titulo">Média de Avaliações: {media.toFixed(2)}</h1>
    </div>
  );
}

export default App;