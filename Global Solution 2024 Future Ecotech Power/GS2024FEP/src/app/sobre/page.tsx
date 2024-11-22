import React from 'react';
import './page.css';

const SobreNos: React.FC = () => {
  return (
    <>
      <header className="header">
        <div className="menu-icon">
          <i className="fas fa-bars"></i>
        </div>
        <h1 className="title">Sobre Nós</h1>
        <img src="/imgs/FEP.png" alt="Logo FEP" className="logo" />
      </header>

      <main className="main-content">
        <p>
          Com uma interface simples e interativa, o Future Ecotech Power permite que você acompanhe o consumo energético da sua residência em tempo real, diretamente no seu computador ou no seu smartphone. 
          Os gráficos claros e intuitivos mostram o uso de energia por hora, dia e mês, revelando padrões que ajudam você a entender em quais horários e com quais eletrodomésticos o consumo é maior. Essa visão detalhada permite que você identifique oportunidades de economia e tome medidas imediatas para reduzir o desperdício.
        </p>
        <p>
          Além de monitorar o consumo, o Future Ecotech Power utiliza inteligência artificial para analisar dados históricos e fazer previsões sobre o uso futuro de energia. 
          Com base no seu perfil de consumo e em tendências sazonais, o site e aplicativo sugerem pequenas mudanças de comportamento que podem gerar grandes economias a longo prazo. 
          Por exemplo, ele pode sugerir que você evite usar a máquina de lavar em horários de pico ou que substitua lâmpadas convencionais por LEDs. Esses conselhos são personalizados e focados em hábitos que farão sentido para o seu perfil específico de uso.
        </p>
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

export default SobreNos;
