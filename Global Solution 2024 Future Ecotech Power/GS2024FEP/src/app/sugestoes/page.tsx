import React from 'react';
import './page.css';

const SugestoesEnergia: React.FC = () => {
  return (
    <>
      <header className="header">
        <div className="menu-icon">
          <i className="fas fa-bars"></i>
        </div>
        <h1 className="title">Sugestões</h1>
        <img src="/imgs/FEP.png" alt="Logo FEP" className="logo" />
      </header>

      <main className="main-content">
        <p className="description">
          Com base nas informações apresentadas, trouxemos sugestões que podem diminuir o consumo e gasto de energia em sua residência:
        </p>
        <div className="suggestion-boxes">
          <div className="suggestion-box">
            <i className="fas fa-lightbulb suggestion-icon"></i>
            <h2>Troque suas lâmpadas</h2>
            <p>Substitua lâmpadas incandescentes por LEDs, que consomem até 80% menos energia.</p>
          </div>
          <div className="suggestion-box">
            <i className="fas fa-plug suggestion-icon"></i>
            <h2>Desligue aparelhos</h2>
            <p>Desconecte aparelhos eletrônicos da tomada quando não estiverem em uso.</p>
          </div>
          <div className="suggestion-box">
            <i className="fas fa-solar-panel suggestion-icon"></i>
            <h2>Invista em energia solar</h2>
            <p>Considere instalar painéis solares para gerar energia limpa e economizar a longo prazo.</p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>
          FIAP - Faculdade de Informática e Administração Paulista.
        </p>
        <p>
          Equipe | Fale conosco: <i className="fas fa-phone"></i> 11 979680993
        </p>
      </footer>
    </>
  );
};

export default SugestoesEnergia;
