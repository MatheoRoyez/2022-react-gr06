import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Statistics = ({ csr }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            weight: "normal",
            family: "Arial, sans-serif",
          },
        },
      },
      title: {
        display: true,
        text: `MVO - ${csr.name} (${csr.unit})`,
      },
    },
  };

  // Values are sometimes received in reverse.
  const orderedHistory = csr.history.sort((h1, h2) => {
    return new Date(h1.date) - new Date(h2.date);
  });

  const labels = orderedHistory.map((e) =>
    new Date(e.date).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Behaalde waarde",
        data: orderedHistory.map((e) => e.value),
        borderColor: "#b2d235",
        backgroundColor: "#b2d235",
      },
      {
        label: "Doelwaarde",
        data: labels.map((e) => csr.threshold.value),
        borderColor: "#004c69",
        backgroundColor: "#004c69",
      },
    ],
  };

  return (
    <div className="graph" data-cy="graph">
      <Line
        className="graph-stats"
        options={options}
        data={data}
        style={{ maxWidth: "100%" }}
        onResize={() => {}}
      />
    </div>
  );
};

export default Statistics;
