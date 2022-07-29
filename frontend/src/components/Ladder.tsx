import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";
import { Radar } from "react-chartjs-2";
import { FC } from "react";
import LadderDescriptions from "./LadderDescriptions";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const userData = {
  technology: 2,
  system: 2,
  people: 4,
  process: 3,
  influence: 1,
};

const Ladder: FC<{ height: string; width: string }> = ({ height, width }) => {
  const data = {
    labels: ["Technology", "System", "People", "Process", "Influence"],
    datasets: [
      {
        label: "d1",
        data: [userData.technology, userData.system, userData.people, userData.process, userData.influence],
        backgroundColor: "transparent",
        borderColor: "#0070c0",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
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
            size: 20,
          },
          backdropColor: "transparent",
        },
        beginAtZero: true,
        min: 0,
        max: 6,
        pointLabels: {
          font: {
            size: 20,
          },
          color: "black",
        },
      },
    },
  };

  return (
    <div style={{ height, width, display: "flex", flexDirection: "row" }}>
      <Radar data={data} options={options} />
      <LadderDescriptions />
    </div>
  );
};

export default Ladder;
