import React, { Dispatch, FC, SetStateAction } from "react";
import { useRouter } from "next/router";
import { Box, Button } from "@mui/material";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EventSeat from "@mui/icons-material/EventSeat";
import BarChartIcon from "@mui/icons-material/BarChart";
import { useAuth } from "../providers";

type IProps = {
  open?: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  openTab: string;
  setOpenTab: Dispatch<SetStateAction<string>>;
};

type tabType = {
  title: string;
  href: string;
  adminOnly?: boolean;
};

type MenuItemType = {
  title: string;
  children: tabType[];
  icon: React.ReactElement;
};

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
        title: "Ticketing Form",
        href: "/ticketing/form",
        adminOnly: true,
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
    title: "Profile",
    icon: <AccountBoxIcon />,
    children: [
      {
        title: "profile",
        href: "/profile",
      },
    ],
  },
  {
    title: "Seat plan",
    icon: <EventSeat />,
    children: [
      {
        title: "seat plan",
        href: "/seatplan",
      },
    ],
  },
  {
    title: "OKR",
    icon: <BarChartIcon />,
    children: [
      {
        title: "okr",
        href: "/okr",
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
    marginRight: "30px",
    borderRadius: "2px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#F5F5F5",
  },
  sideBarIconButton: {
    px: 0,
  },
  sideButton: {
    background: "transparent",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    padding: "8px",
    color: "#42526e",
    borderRadius: "4px",
    justifyContent: "flex-start",
    textTransform: "capitalize",
    "&:hover": {
      background: "transparent",
      color: "#019aff",
    },
  },
  listButton: {
    background: "transparent",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    padding: "8px",
    color: "#42526e",
    textTransform: "capitalize",
    borderRadius: "4px",
    justifyContent: "flex-start",
    marginLeft: " 8px",
    "&:hover": {
      background: "transparent",
      color: "#019aff",
    },
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
  const { userRole } = useAuth();
  const hasChildren = menuItem.children.length >= 2;

  return (
    <Box sx={styles.sideBarItemContainer}>
      <Button
        disableElevation
        disableRipple
        sx={[
          styles.sideBarIconButton,
          styles.sideButton,
          !hasChildren && router.asPath === menuItem.children[0].href && { color: "#019aff" },
          hasChildren && menuItem.children.find(item => item.href === router.asPath) && { color: "#019aff" },
        ]}
        onClick={async () => {
          if (!hasChildren) {
            await router.push(menuItem.children[0].href);
            setOpenTab("");
            setOpen(false);
            return;
          }
          if (openTab === menuItem.title) {
            setOpenTab("");
          } else {
            setOpenTab(menuItem.title);
          }
          setOpen(true);
        }}
      >
        <Box sx={styles.sideBarItemIcon}>{menuItem.icon}</Box>
        {menuItem.title}
      </Button>
      {hasChildren && (
        <Box
          sx={{
            display: openTab === menuItem.title ? "flex" : "none",
            flexDirection: "column" as const,
          }}
        >
          {menuItem.children.map((tab, index) => (
            <Button
              disableElevation
              disableRipple
              key={index}
              sx={[
                styles.listButton,
                tab.adminOnly && userRole !== "Super Admin" ? { display: "none" } : { display: "flex" },
              ]}
              onClick={async () => {
                await router.push(tab.href);
                setOpenTab("");
                setOpen(false);
              }}
            >
              {tab.title}
            </Button>
          ))}
        </Box>
      )}
    </Box>
  );
};

const SideBar: FC<IProps> = ({ setOpen, openTab, setOpenTab }) => {
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
