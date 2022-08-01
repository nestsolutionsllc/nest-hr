// import { useState, SyntheticEvent, HTMLButtonElement } from "react";
import type { NextPage } from "next";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MainLayout from "../../layouts/MainLayout";

const OkrPage: NextPage = () => {
  // Accordion show or hide
  // const [expanded, setExpanded] = useState<string | false>("panel1");
  // const handleChange = (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
  //   setExpanded(newExpanded ? panel : false);
  // };
  // Accordion show or hide
  // Popover menu
  // const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  // const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  // const open = Boolean(anchorEl);
  // Popover menu

  return (
    <MainLayout>
      <Box>
        <Typography variant="h5">YOUR OKR SCREEN</Typography>
        <Box>
          <Typography variant="caption">OKR EMPTY</Typography>
        </Box>
        <Box>
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={() => {
              console.log("Add OKR");
            }}
          >
            Add
          </Button>
        </Box>
        <Box></Box>
      </Box>
    </MainLayout>
  );
};

export default OkrPage;
