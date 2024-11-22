import React from 'react';
import './page.css';

const Page: React.FC = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src="/imgs/FEP.png" alt="Logo da aplicação" />
      </div>

      <h1>Bem-vindo</h1>
      <p>Faça login ou cadastre-se</p>

      <form className="login-form">
        <label htmlFor="username">Usuário:</label>
        <input type="text" id="username" name="username" placeholder="Digite seu usuário" required />

        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" name="password" placeholder="Digite sua senha" required />

        <button type="submit" className="btn-login">Entrar</button>
        <a href="/cadastro" className="btn-register">Cadastre-se</a>
      </form>

      <footer className="footer">
        <p>FIAP - Faculdade de Informática e Administração Paulista.</p>
        <p>Fale conosco - (11) 97968-0993</p>
      </footer>
    </div>
  );
};

export default Page;
