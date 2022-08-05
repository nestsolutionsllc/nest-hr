import React, { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Button, styled } from "@mui/material";
import CalendarIcon from "@mui/icons-material/CalendarToday";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

type IProps = { open: boolean; setOpen: Dispatch<SetStateAction<boolean>> };

type tabType = {
  title: string;
  href: string;
};

type MenuItemType = {
  title: string;
  children: tabType[];
  icon: React.ReactElement;
};

const StyledButton = styled(Button)`
  background: transparent;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  padding: 8px;
  color: #42526e;
  borderradius: 4px;
  justify-content: flex-start;
  text-transform: capitalize;
  :hover {
    background: transparent;
    color: #019aff;
  }
`;
const StyledListItemButton = styled(Button)`
  background: transparent;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  padding: 8px;
  color: #42526e;
  text-transform: capitalize;
  borderradius: 4px;
  justify-content: flex-start;
  margin-left: 8px;
  :hover {
    background: transparent;
    color: #019aff;
  }
`;

export const menuItems = [
  {
    title: "Ticketing",
    icon: <ConfirmationNumberIcon />,
    children: [
      {
        title: "Daily",
        href: "/ticketing/daily",
      },
      {
        title: "Ticketing Request",
        href: "/ticketing/request",
      },
      {
        title: "Ticketing Report",
        href: "/ticketing/report",
      },
    ],
  },
  {
    title: "OrgChart",
    icon: <AccountTreeIcon />,
    children: [
      {
        title: "Organizational Chart",
        href: "/orgchart",
      },
    ],
  },
  {
    title: "Leave",
    icon: <CalendarIcon />,

    children: [
      {
        title: "Leave Request",
        href: "/leave/request",
      },
      {
        title: "Leave Status",
        href: "/leave/status",
      },
      {
        title: "Calendar",
        href: "/leave/calendar",
      },
      {
        title: "Summary",
        href: "/leave/summary",
      },
    ],
  },
];

const styles = {
  sideBar: {
    display: "flex",
    flexDirection: "column" as const,
    padding: "0px 8px",
  },
  sideBarItemContainer: {
    display: "flex",
    flexDirection: "column" as const,
  },
  sideBarItemContainerTitle: {
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    padding: "8px",
    color: "#42526E",
    borderRadius: "4px",
  },
  sideBarItemIcon: {
    minWidth: "40px",
    minHeight: "40px",
    marginRight: "16px",
    borderRadius: "2px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#F5F5F5",
  },
  sideBarIconButton: {
    px: 0,
  },
};

const SideBarItemContainer = ({
  menuItem,
  openTab,
  setOpenTab,
  setOpen,
}: {
  menuItem: MenuItemType;
  openTab: string;
  setOpenTab: Dispatch<SetStateAction<string>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  return (
    <Box sx={styles.sideBarItemContainer}>
      <StyledButton
        disableElevation
        disableRipple
        sx={styles.sideBarIconButton}
        onClick={() => {
          if (openTab !== menuItem.title) {
            setOpenTab(menuItem.title);
          } else {
            setOpenTab("");
          }
          setOpen(true);
        }}
      >
        <Box sx={styles.sideBarItemIcon}>{menuItem.icon}</Box>
        {menuItem.title}
      </StyledButton>
      <Box
        sx={{
          display: openTab === menuItem.title ? "flex" : "none",
          flexDirection: "column" as const,
        }}
      >
        {menuItem.children.map(tab => (
          <StyledListItemButton
            disableElevation
            disableRipple
            onClick={() => {
              router.push(tab.href);
            }}
          >
            {tab.title}
          </StyledListItemButton>
        ))}
      </Box>
    </Box>
  );
};

const SideBar: FC<IProps> = ({ open, setOpen }) => {
  const [openTab, setOpenTab] = useState<string>("");
  useEffect(() => {
    if (!open) {
      setOpenTab("");
    }
  }, [open]);
  return (
    <Box sx={styles.sideBar}>
      {menuItems.map(({ title, children, icon }, index) => {
        return (
          <SideBarItemContainer
            key={index}
            menuItem={{ title, children, icon }}
            setOpenTab={setOpenTab}
            openTab={openTab}
            setOpen={setOpen}
          />
        );
      })}
    </Box>
  );
};

export default SideBar;
