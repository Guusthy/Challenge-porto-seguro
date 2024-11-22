import React from 'react';
import './page.css';

const FormularioConsumo: React.FC = () => {
  return (
    <main className="container">
      <form>
        <div className="form-group">
          <label htmlFor="tipoImovel">Qual o tipo de imóvel?</label>
          <input
            type="text"
            id="tipoImovel"
            name="tipoImovel"
            placeholder="Ex.: Residencial, Comercial"
          />
        </div>

        <div className="form-group">
          <label htmlFor="pessoas">Quantas pessoas utilizam o imóvel?</label>
          <input
            type="number"
            id="pessoas"
            name="pessoas"
            placeholder="Digite o número de pessoas"
          />
        </div>

        <div className="form-group">
          <label htmlFor="horasUso">Média de horas que utilizam?</label>
          <input
            type="number"
            id="horasUso"
            name="horasUso"
            placeholder="Ex.: 5 horas/dia"
          />
        </div>

        <div className="form-group">
          <label htmlFor="potenciaAparelhos">Qual a potência dos principais aparelhos?</label>
          <input
            type="text"
            id="potenciaAparelhos"
            name="potenciaAparelhos"
            placeholder="Ex.: 100W, 200W"
          />
        </div>

        <div className="form-group">
          <label htmlFor="eletrodomesticos">Quais eletrodomésticos possui e usa?</label>
          <textarea
            id="eletrodomesticos"
            name="eletrodomesticos"
            rows={3}
            placeholder="Ex.: Geladeira, Máquina de Lavar"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="horarioUso">Em qual horário é mais utilizado?</label>
          <input
            type="text"
            id="horarioUso"
            name="horarioUso"
            placeholder="Ex.: Manhã, Tarde, Noite"
          />
        </div>

        <div className="form-group">
          <label htmlFor="frequenciaUso">Com que frequência utiliza eles?</label>
          <input
            type="text"
            id="frequenciaUso"
            name="frequenciaUso"
            placeholder="Ex.: Diariamente, Semanalmente"
          />
        </div>

        <div className="form-group">
          <label htmlFor="fonteRenovavel">Você possui alguma fonte renovável? Qual?</label>
          <input
            type="text"
            id="fonteRenovavel"
            name="fonteRenovavel"
            placeholder="Ex.: Placas solares"
          />
        </div>

        <div className="form-group">
          <label htmlFor="frequenciaSemanal">
            Semanalmente com qual frequência você utiliza?
          </label>
          <input
            type="text"
            id="frequenciaSemanal"
            name="frequenciaSemanal"
            placeholder="Ex.: 3 vezes/semana"
          />
        </div>

        <button type="submit" className="btn-submit">
          Seguinte
        </button>
      </form>
    </main>
  );
};

export default FormularioConsumo;
