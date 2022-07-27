import { FC, useCallback } from 'react';
import { useRouter } from 'next/router';
import { ListItemButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import CategoryIcon from '@mui/icons-material/Category';

const menuItems = [
  // Sample Sidebar menu items -> 
  // {
  //   href: '/',
  //   title: 'Хянах самбар',
  //   icon: <DashboardIcon />,
  // },
];

export const SideBar: FC<IProps> = ({ open }) => {
  const { push } = useRouter();
  const changePage = useCallback((href) => {
    return () => push(href as string);
  }, []);

  return (
    <>
      {menuItems.map(({ href, title, icon }, index) => {
        return (
          <Tooltip key={index} title={open ? '' : title} placement="right">
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

type IProps = { open: boolean };