import { FC, useState } from "react";

type descriptionField = "technology" | "system" | "people" | "process" | "influence";

const description = {
  technology: ["Adopts", "Specializes", "Evangelizes", "Masters", "Creates"],
  system: ["Enhances", "Designs", "Owns", "Evolves", "Leads"],
  people: ["Learns", "Supports", "Mentors", "Coordinates", "Manages"],
  process: ["Follows", "Enforces", "Challenges", "Adjusts", "Defines"],
  influence: ["Subsystem", "Team", "Multiple teams", "Company", "Community"],
};

const LadderDescriptions: FC = () => {
  const [content, setContent] = useState<descriptionField>("technology");
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", borderBottom: "1px solid black" }}>
        <button onClick={() => setContent("technology")}>Technology</button>
        <button onClick={() => setContent("system")}>System</button>
        <button onClick={() => setContent("people")}>People</button>
        <button onClick={() => setContent("process")}>Process</button>
        <button onClick={() => setContent("influence")}>Influence</button>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {description[content].map((el, ind) => (
          <div>{`${ind + 1}.${el}`}</div>
        ))}
      </div>
    </div>
  );
};

export default LadderDescriptions;
