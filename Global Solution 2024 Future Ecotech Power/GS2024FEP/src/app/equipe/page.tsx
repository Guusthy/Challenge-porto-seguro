import React from 'react';
import './page.css';

const Equipe: React.FC = () => {
    return (
        <>
            <header className="header">
                <div className="logo">
                    <img src="/imgs/FEP.png" alt="Logo FEP" />
                </div>
                <nav>
                    <span className="menu">&#9776;</span>
                </nav>
            </header>

            <main className="main-content">
                <h1 className="title">Equipe</h1>
                <div className="team-members">
                    <div className="member">
                        <img src="/imgs/Gustavo.png" alt="Foto de Gustavo" />
                        <h2>Gustavo Roberto do Nascimento</h2>
                        <p>558033</p>
                        <a href="https://github.com/Guusthy" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </div>
                    <div className="member">
                        <img src="/imgs/Jean.png" alt="Foto de Jean" />
                        <h2>Jean Roberto Gomes</h2>
                        <p>94418</p>
                        <a href="https://github.com/JeanGomesxs" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </div>
                    <div className="member">
                        <img src="/imgs/Ricky.png" alt="Foto de Ricky" />
                        <h2>Ricky Manoel Cardozo Rajput</h2>
                        <p>558292</p>
                        <a href="https://github.com/rascky" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </div>
                </div>
            </main>

            <footer className="footer">
                <p>FIAP - Faculdade de Informática e Administração Paulista.</p>
                <p>Fale conosco: 11 979680993</p>
            </footer>
        </>
    );
};

export default Equipe;
