import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const CompletadosPie = ({ games }) => {
  const completados = games.filter(g => g.completado).length;
  const noCompletados = games.length - completados;

  const data = {
    labels: ["Completados", "No Completados"],
    datasets: [
      {
        data: [completados, noCompletados],
        backgroundColor: [
          "rgba(0, 255, 136, 0.6)",  // verde
          "rgba(255, 80, 80, 0.6)",  // rojo
        ],
        borderColor: ["#00ff88", "#ff5050"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#e0e0e0",
        },
      },
      title: {
        display: true,
        text: "Completados vs No Completados",
        color: "#fff",
        font: { size: 18 },
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default CompletadosPie;