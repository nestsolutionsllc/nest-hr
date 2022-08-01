import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";
import { Radar } from "react-chartjs-2";
import { FC } from "react";
import LadderDescriptions, { Information } from "./LadderInformation";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const userData = {
  technology: 2,
  system: 2,
  people: 4,
  process: 4,
  influence: 3,
};

const Ladder: FC<{ width: string }> = ({ width }) => {
  // const [windowSize, setWindowSize] = useState<{ height: number; width: number }>({ height: 0, width: 0 });

  const data = {
    labels: ["Technology", "System", "People", "Process", "Influence"],
    datasets: [
      {
        label: "Current",
        data: [userData.technology, userData.system, userData.people, userData.process, userData.influence],
        backgroundColor: "transparent",
        borderColor: "#0070c0",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1 / 1,
    plugins: { tooltip: { callbacks: { label: a => `${a.raw}.${Information[a.label][a.raw - 1][0]}` } } },
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
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", height: "100%" }}>
      <div style={{ width }}>
        <Radar data={data} options={options} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "45%",
        }}
      >
        <LadderDescriptions type={"description"} />
        <LadderDescriptions type={"level"} />
      </div>
    </div>
  );
};

export default Ladder;
