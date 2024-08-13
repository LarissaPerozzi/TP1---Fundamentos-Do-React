function calcularMediaAvaliacoes(avaliacoes) {
    if (avaliacoes.length === 0) return 0; // Retorna 0 para arrays vazios
    const soma = avaliacoes.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    const media = soma / avaliacoes.length;
    return media;
  }
  
  export default function App() {
    const [avaliacoes, setAvaliacoes] = useState([]);
    const [media, setMedia] = useState(null);
  
    // Arrays de exemplo
    const avaliacoes1 = [4, 5, 3, 4, 5];
    const avaliacoes2 = [2, 3, 4, 2, 3];
  
    // Função para calcular a média e atualizar os estados
    const calcular = (avaliacoesSelecionadas) => {
      const mediaCalculada = calcularMediaAvaliacoes(avaliacoesSelecionadas);
      setAvaliacoes(avaliacoesSelecionadas);
      setMedia(mediaCalculada);
    };
  
    return (
      <div>
        <h1>Calcular Média das Avaliações</h1>
        <button onClick={() => calcular(avaliacoes1)}>Escolher Avaliações 1</button>
        <button onClick={() => calcular(avaliacoes2)}>Escolher Avaliações 2</button>
        
        {media !== null && (
          <div>
            <h2>Avaliações Selecionadas: {avaliacoes.join(', ')}</h2>
            <p>Média das Avaliações: {media.toFixed(2)}</p>
          </div>
        )}
      </div>
    );
  }