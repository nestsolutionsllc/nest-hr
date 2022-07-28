import { FC, useCallback } from "react";
import { useRouter } from "next/router";
import { ListItemButton, ListItemIcon, ListItemText, Tooltip } from "@mui/material";

type IProps = { open: boolean };

export const menuItems = [
  // {
  //   href: '/',
  //   title: 'Хянах самбар',
  //   icon: <DashboardIcon />,
  // },
];

const SideBar: FC<IProps> = ({ open }) => {
  const { push } = useRouter();
  const changePage = useCallback(
    (href: string) => {
      return () => push(href);
    },
    [push]
  );

  return (
    <>
      {menuItems.map(({ href, title, icon }, index) => {
        return (
          <Tooltip key={index} title={open ? "" : title} placement="right">
            <ListItemButton onClick={changePage(href)}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={title} />
            </ListItemButton>
          </Tooltip>
        );
      })}
    </>
  );
};

export default SideBar;
