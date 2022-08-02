import { ReactNode, SyntheticEvent, useState } from "react";
import { Tabs, Tab, Box, styled, Stack } from "@mui/material";
import Ladder from "./Ladder";
import Salary from "./Salary";
import Onboard from "./Onboard";
import Achievement from "./Achievement";

const tabItems = [
  {
    title: "Ladder Level",
    component: <Ladder />,
  },
  {
    title: "Salary",
    component: <Salary />,
  },
  {
    title: "Onboarding checklist",
    component: <Onboard />,
  },
  {
    title: "Achievement",
    component: <Achievement />,
  },
];

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}
const TabPanelContainer = styled(Box)`
  margin-left: 20px;
  box-shadow: "0px 0px 8px 0px rgba(0,0,0,0.1);";
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
`;

const TabContainer = styled(Box)`
  display: flex;
  min-height: 700px;
`;

const TabHeader = styled(Stack)`
  justify-content: center;
  align-items: center;
  background-color: #fbfcff;
  height: 10%;
  box-shadow: "0px 0px 8px 0px rgba(0,0,0,0.1);";
`;

const IconWrapper = styled(Box)`
  width: 35;
  height: 35;
  border-radius: 50%;
  background-color: #fff;
  text-align: center;
  padding: 8px;
`;

const StyledTab = styled(Tab)`
  align-items: flex-start;
  text-transform: capitalize;
`;

const StyledTabs = styled(Tabs)`
  background-color: #fff;
  min-width: 250px;
  box-shadow: "0px 0px 8px 0px rgba(0,0,0,0.1);";
  height: 90%;
`;

const TabPanel = (props: TabPanelProps) => {
  const { children, index, value, ...other } = props;
  return (
    <Box role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} {...other}>
      {index === value && <TabPanelContainer>{children}</TabPanelContainer>}
    </Box>
  );
};

const VerticalTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <TabContainer>
      <Box>
        <TabHeader>
          <IconWrapper>
            <img src="/assets/userprofile/person.svg" alt="person" />
          </IconWrapper>
        </TabHeader>
        <StyledTabs orientation="vertical" value={value} onChange={handleChange}>
          {tabItems.map((item, index) => (
            <StyledTab label={item.title} key={index} disableRipple />
          ))}
        </StyledTabs>
      </Box>
      <Box>
        {tabItems.map((item, index) => (
          <TabPanel value={value} index={index} key={index}>
            {item.component}
          </TabPanel>
        ))}
      </Box>
    </TabContainer>
  );
};

export default VerticalTabs;
