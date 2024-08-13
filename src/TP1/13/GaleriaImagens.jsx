import React from 'react';
import './GaleriaImagens.css';

function GaleriaImagens() {
  const imagens = [
    { url: 'https://via.placeholder.com/150', legenda: 'Imagem 1' },
    { url: 'https://via.placeholder.com/150', legenda: 'Imagem 2' },
    { url: 'https://via.placeholder.com/150', legenda: 'Imagem 3' }
  ];

  return (
    <div className="galeria-imagens">
      {imagens.map((imagem, index) => (
        <div key={index} className="imagem-item">
          <img src={imagem.url} alt={imagem.legenda} className="imagem" />
          <p className="legenda">{imagem.legenda}</p>
        </div>
      ))}
    </div>
  );
}

export default GaleriaImagens;