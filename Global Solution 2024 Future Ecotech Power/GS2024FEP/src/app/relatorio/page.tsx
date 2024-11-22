import React, { useEffect, useState } from 'react';
import './page.css';
import { Line } from 'react-chartjs-2'; 
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface EnergyData {
  day: string;
  consumption: number;
}

const RelatorioFinal: React.FC = () => {
  const [data, setData] = useState<EnergyData[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const mockData: EnergyData[] = [
        { day: 'Segunda', consumption: 12 },
        { day: 'Terça', consumption: 15 },
        { day: 'Quarta', consumption: 10 },
        { day: 'Quinta', consumption: 18 },
        { day: 'Sexta', consumption: 20 },
        { day: 'Sábado', consumption: 25 },
        { day: 'Domingo', consumption: 22 },
      ];
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setData(mockData);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const chartData = {
    labels: data.map((item) => item.day),
    datasets: [
      {
        label: 'Consumo de Energia (kWh)',
        data: data.map((item) => item.consumption),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Consumo Energético Semanal',
      },
    },
  };

  return (
    <>
      <header className="header">
        <div className="menu-icon">
          <i className="fas fa-bars"></i>
        </div>
        <h1 className="title">Relatório Final</h1>
        <img src="logo.png" alt="Logo FEP" className="logo" />
      </header>

      <main className="main-content">
        <div className="content">
          <p>
            Com base nas informações apresentadas, fizemos um relatório explicando o gasto de energia em sua
            residência:
          </p>
          <div className="report-area">
            {loading ? (
              <p>Carregando dados...</p>
            ) : (
              <Line data={chartData} options={chartOptions} />
            )}
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>FIAP - Faculdade de Informática e Administração Paulista.</p>
        <p>
          Equipe | Fale conosco: <i className="fas fa-phone"></i> 11 979680993
        </p>
      </footer>
    </>
  );
};

export default RelatorioFinal;
