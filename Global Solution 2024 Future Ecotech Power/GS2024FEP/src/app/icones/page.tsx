import React from 'react';
import './page.css';

const InterfaceInterativa: React.FC = () => {
  return (
    <>
      <header className="header">
        <div className="menu-icon">&#9776;</div>
        <div className="logo">
          <img src="/imgs/FEP.png" alt="Logo FEP" />
        </div>
      </header>

      <main className="main-content">
        <div className="central-block">
          <div className="icon-box">
            <i className="fas fa-lightbulb"></i>
            <p>Sugestões</p>
          </div>
          <div className="icon-box">
            <i className="fas fa-question"></i>
            <p>Saiba mais</p>
          </div>
          <div className="icon-box">
            <i className="fas fa-file-alt"></i>
            <p>Relatório</p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>FIAP - Faculdade de Informática e Administração Paulista.</p>
        <p>Equipe | Fale conosco: 11 979680993</p>
      </footer>
    </>
  );
};

export default InterfaceInterativa;
