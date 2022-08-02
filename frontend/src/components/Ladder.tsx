import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";
import { Radar } from "react-chartjs-2";
import { FC } from "react";
import { Box } from "@mui/material";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const levelData = {
  Current: {
    technology: 2,
    system: 2,
    people: 2,
    process: 2,
    influence: 2,
  },
  d1: {
    technology: 1,
    system: 1,
    people: 1,
    process: 1,
    influence: 1,
  },
  d2: {
    technology: 1,
    system: 2,
    people: 2,
    process: 2,
    influence: 1,
  },
  d3: {
    technology: 2,
    system: 2,
    people: 2,
    process: 3,
    influence: 2,
  },
  d4: {
    technology: 3,
    system: 3,
    people: 3,
    process: 3,
    influence: 2,
  },
  d5: {
    technology: 4,
    system: 4,
    people: 3,
    process: 4,
    influence: 3,
  },
  d6: {
    technology: 5,
    system: 5,
    people: 3,
    process: 4,
    influence: 4,
  },
  d7: {
    technology: 5,
    system: 5,
    people: 3,
    process: 4,
    influence: 5,
  },
};

export const Information = {
  Technology: [
    ["Adopts", "Actively learns and adopts the technology and tools defined by the team"],
    ["Specializes", "Is the go-to person for one or more technologies and takes initiative to learn new ones"],
    ["Evangelizes", "Researches, create proofs of concept, and introduces new technologies to the team"],
    ["Masters", "Has very deep knowledge about the whole technology stack of the system"],
    ["Creates", "Designs and creates new technologies that are widely used either by internal or external teams"],
  ],
  System: [
    ["Enhances", " Successfully pushes new features and bug fixes to improve and extend the system"],
    ["Designs", "Designs and implements medium to large size features while reducing the system's tech debt"],
    ["Owns", "Owns the production operation and monitoring of the system and is aware of its SLAs"],
    ["Evolves", "Evolves the architecture to support future requirements and defines its SLAs"],
    ["Leads", "Leads the technical excellence of the system and creates plans to mitigate outages"],
  ],
  People: [
    ["Learns", "Quickly learns from others and consistently steps up when it is required"],
    ["Supports", "Proactively supports other team members and helps them to be successful"],
    ["Mentors", "Mentors others to accelerate their career growth and encourage them to participate"],
    ["Coordinates", "Coordinates team members providing effective feedback and moderating discussions"],
    ["Manages", "Manages the team members' career, expectations, performance, and level of happiness"],
  ],
  Process: [
    ["Follows", "Follows the team processes, delivering a consistent flow of features to production"],
    ["Enforces", "Enforces the team processes, making sure everybody understands the benefits and tradeoffs"],
    ["Challenges", "Challenges the team processes, looking for ways to improve them"],
    ["Adjusts", "Adjusts the team processes, listening to feedback and guiding the team through the changes"],
    ["Defines", "Defines the right processes for the team's maturity level, balancing agility and discipline"],
  ],
  Influence: [
    ["Subsystem", "Makes an impact on one or more subsystems"],
    ["Team", "Makes an impact on the whole team, not just on specific parts of it"],
    ["Multiple teams", "Makes an impact not only on his/her team but also on other teams"],
    ["Company", "Makes an impact on the whole tech organization"],
    ["Community", "Makes an impact on the tech community"],
  ],
  d1: [
    ["Technology", "Adopts"],
    ["System", "Enhances"],
    ["People", "Learns"],
    ["Process", "Follows"],
    ["Influence", "Subsystem"],
  ],
  d2: [
    ["Technology", "Adopts"],
    ["System", "Designs"],
    ["People", "Supports"],
    ["Process", "Enforces"],
    ["Influence", "Subsystem"],
  ],
  d3: [
    ["Technology", "Specializes"],
    ["System", "Designs"],
    ["People", "Supports"],
    ["Process", "Challenges"],
    ["Influence", "Team"],
  ],
  d4: [
    ["Technology", "Evangelizes"],
    ["System", "Owns"],
    ["People", "Mentors"],
    ["Process", "Challenges"],
    ["Influence", "Team"],
  ],
  d5: [
    ["Technology", "Masters"],
    ["System", "Evolves"],
    ["People", "Mentors"],
    ["Process", "Adjusts"],
    ["Influence", "Multuple Teams"],
  ],
  d6: [
    ["Technology", "Creates"],
    ["System", "Leads"],
    ["People", "Mentors"],
    ["Process", "Adjusts"],
    ["Influence", "Company"],
  ],
  d7: [
    ["Technology", "Creates"],
    ["System", "Leads"],
    ["People", "Mentors"],
    ["Process", "Adjusts"],
    ["Influence", "Community"],
  ],
};

export type levelsType = "Current" | "d1" | "d2" | "d3" | "d4" | "d5" | "d6" | "d7";

export const Ladder: FC<{ width: string; label: levelsType }> = ({ width, label }) => {
  console.log(label);
  const data = {
    labels: ["Technology", "System", "People", "Process", "Influence"],
    datasets: [
      {
        label,
        data: [
          levelData[label].technology,
          levelData[label].system,
          levelData[label].people,
          levelData[label].process,
          levelData[label].influence,
        ],
        backgroundColor: "transparent",
        borderColor: "#0070c0",
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
    <Box style={{ width }}>
      <Radar data={data} options={options} />
    </Box>
  );
};
