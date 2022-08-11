import { FC, ReactNode, SyntheticEvent, useState } from "react";
import { Tabs, Tab, Box, Stack } from "@mui/material";
import Level from "./level/index";
import Salary from "./salary";
import Onboard from "./onboarding/Onboard";
import Achievement from "./achievement";

const tabItems = [
  {
    title: "Ladder Level",
    component: <Level />,
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

const styles = {
  tabPanelContainer: {
    marginLeft: "20px",
    boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    borderRadius: "5px",
    padding: "20px",
  },
  tabContainer: {
    display: "flex",
    minHeight: "700px",
  },
  tabList: {
    boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.1)",
  },
  tabHeader: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fbfcff",
    height: "10%",
    borderBottom: 1,
    borderColor: "#f0f2f5",
  },
  iconWrapper: {
    width: 35,
    height: 35,
    borderRadius: "50%",
    backgroundColor: "#fff",
    textAlign: "center",
    paddingTop: "5px",
  },
  tabs: {
    backgroundColor: "#fff",
    minWidth: 250,
    height: "90%",
  },
  tab: {
    alignItems: "flex-start",
    textTransform: "capitalize",
  },
  tabListContainer: {
    width: "100%",
  },
};

const TabPanel: FC<TabPanelProps> = props => {
  const { children, index, value, ...other } = props;
  return (
    <Box role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} {...other}>
      {index === value && <Box sx={styles.tabPanelContainer}>{children}</Box>}
    </Box>
  );
};

const VerticalTabs: FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={styles.tabContainer}>
      <Box sx={styles.tabList}>
        <Stack sx={styles.tabHeader}>
          <Box sx={styles.iconWrapper}>
            <img src="/assets/profile/person.svg" alt="person" />
          </Box>
        </Stack>
        <Tabs orientation="vertical" value={value} onChange={handleChange} sx={styles.tabs}>
          {tabItems.map((item, index) => (
            <Tab label={item.title} key={index} disableRipple sx={styles.tab} />
          ))}
        </Tabs>
      </Box>
      <Box sx={styles.tabListContainer}>
        {tabItems.map((item, index) => (
          <TabPanel value={value} index={index} key={index}>
            {item.component}
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
};

export default VerticalTabs;
