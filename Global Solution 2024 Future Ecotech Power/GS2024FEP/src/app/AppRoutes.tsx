import React from 'react';
import { useRouter } from 'next/router';

const AppRoutes = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div>
      <h1>App Navigation</h1>
      
      {}
      <div>
        <h2>Main</h2>
        <button onClick={() => navigateTo('/cadastro')}>Ir para Cadastro</button>
        <button onClick={() => navigateTo('/formulario')}>Ir para Formulário</button>
      </div>

      {}
      <div>
        <h2>Cadastro</h2>
        <button onClick={() => navigateTo('/')}>Voltar para Main</button>
        <button onClick={() => navigateTo('/formulario')}>Ir para Formulário</button>
      </div>

      {}
      <div>
        <h2>Formulário</h2>
        <button onClick={() => navigateTo('/icones')}>Ir para Ícones</button>
      </div>

      {}
      <div>
        <h2>Ícones</h2>
        <button onClick={() => navigateTo('/sugestoes')}>Ir para Sugestões</button>
        <button onClick={() => navigateTo('/relatorio')}>Ir para Relatório</button>
        <button onClick={() => navigateTo('/sobre')}>Ir para Sobre</button>
      </div>

      {}
      <div>
        <h2>Sugestões</h2>
        <button onClick={() => navigateTo('/equipe')}>Ir para Equipe</button>
      </div>

      {}
      <div>
        <h2>Relatório</h2>
        <button onClick={() => navigateTo('/equipe')}>Ir para Equipe</button>
      </div>

      {}
      <div>
        <h2>Sobre</h2>
        <button onClick={() => navigateTo('/equipe')}>Ir para Equipe</button>
      </div>

      {}
      <div>
        <h2>Equipe</h2>
        <button onClick={() => navigateTo('/')}>Voltar para Main</button>
      </div>
    </div>
  );
};

export default AppRoutes;
