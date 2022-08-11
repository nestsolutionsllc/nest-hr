import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";
import { Radar } from "react-chartjs-2";
import { FC } from "react";
import { levelsType, levelData, Information } from "./LadderData";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const Ladder: FC<{ label: levelsType }> = ({ label }) => {
  const data = {
    labels: ["Technology", "System", "People", "Process", "Influence"],
    datasets: [
      {
        label: "Current",
        data: [
          levelData.Current.technology,
          levelData.Current.system,
          levelData.Current.people,
          levelData.Current.process,
          levelData.Current.influence,
        ],
        backgroundColor: "transparent",
        borderColor: "#0070c0",
      },
      label !== "Current" && {
        label,
        data: [
          levelData[label].technology,
          levelData[label].system,
          levelData[label].people,
          levelData[label].process,
          levelData[label].influence,
        ],
        backgroundColor: "transparent",
        borderColor: "red",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1 / 1,
    plugins: {
      tooltip: { callbacks: { label: a => `${a.raw}.${Information[a.label][a.raw - 1][0]}` } },
      legend: {
        display: false,
      },
    },
    scales: {
      r: {
        grid: {
          color: ["#cccccc", "#cccccc", "#cccccc", "#cccccc", "#cccccc", "black"],
        },
        angleLines: {
          color: "#cccccc",
        },
        ticks: {
          color: ["none", "black", "black", "black", "black", "black"],
          font: {
            size: 12,
          },
          backdropColor: "transparent",
        },
        beginAtZero: true,
        min: 0,
        max: 6,
        pointLabels: {
          font: {
            size: 12,
          },
          color: "black",
        },
      },
    },
  };

  return <Radar data={data} options={options} />;
};

export default Ladder;
