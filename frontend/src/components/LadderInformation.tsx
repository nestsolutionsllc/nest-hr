import { FC, useState } from "react";
import { Button, Typography } from "@mui/material";

export const Information = {
  Technology: [
    ["Adopts", "Actively learns and adopts the technology and tools defined by the team"],
    ["Specializes", "Is the go-to person for one or more technologies and takes initiative to learn new ones"],
    ["Evangelizes", "Researches, create proofs of concept, and introduces new technologies to the team"],
    ["Masters", "Has very deep knowledge about the whole technology stack of the system"],
    ["Creates", "Designs and creates new technologies that are widely used either by internal or external teams"],
  ],
  System: [
    ["Enhances", " successfully pushes new features and bug fixes to improve and extend the system"],
    ["Designs", "designs and implements medium to large size features while reducing the system's tech debt"],
    ["Owns", "owns the production operation and monitoring of the system and is aware of its SLAs"],
    ["Evolves", "evolves the architecture to support future requirements and defines its SLAs"],
    ["Leads", "leads the technical excellence of the system and creates plans to mitigate outages"],
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

type descriptionType = "Technology" | "System" | "People" | "Process" | "Influence";
type levelsType = "d1" | "d2" | "d3" | "d4" | "d5" | "d6" | "d7";

type infoKeysType = {
  description: descriptionType[];
  level: levelsType[];
};

const infoKeys: infoKeysType = {
  description: ["Technology", "System", "People", "Process", "Influence"],
  level: ["d1", "d2", "d3", "d4", "d5", "d6", "d7"],
};

const LadderDescriptions: FC<{ type: "description" | "level" }> = ({ type }) => {
  const [content, setContent] = useState<descriptionType | levelsType>(type === "description" ? "Technology" : "d1");
  return (
    <div style={{ height: "25vh" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          borderBottom: "1px solid black",
          justifyContent: "space-between",
        }}
      >
        {infoKeys[type].map(el => (
          <Button onClick={() => setContent(el)} variant={"text"}>
            {el}
          </Button>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", overflowY: "scroll", height: "80%" }}>
        {Information[content].map((el, ind) => (
          <div style={{ marginTop: "20px" }}>
            <Typography variant={"h5"}>{`${ind + 1}. ${el[0]} ${type === "level" ? ` - ${el[1]}` : ""}`}</Typography>
            {type === "description" && (
              <Typography marginLeft={"10px"} marginTop={"10px"} variant={"subtitle1"}>{` • ${el[1]}`}</Typography>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LadderDescriptions;
