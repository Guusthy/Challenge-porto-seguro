import React from 'react';
import './page.css';

const CadastroPage: React.FC = () => {
    return (
        <div className="container">
            <div className="logo">
                <img src="/path/to/your/logo.png" alt="Logo da aplicação" />
            </div>

            <form className="form">
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Digite seu email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="telefone">Telefone:</label>
                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        placeholder="Digite seu telefone"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cpf">CPF:</label>
                    <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        placeholder="Digite seu CPF"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Digite sua senha"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirmar Senha:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirme sua senha"
                        required
                    />
                </div>
                <button type="submit" className="btn-submit">
                    Confirmar
                </button>
            </form>

            <footer className="footer">
                <p>&copy; 2024 - FIAP - Faculdade de Informática e Administração Paulista.</p>
                <p>Fale conosco - (11) 97968-0993</p>
            </footer>
        </div>
    );
};

export default CadastroPage;
