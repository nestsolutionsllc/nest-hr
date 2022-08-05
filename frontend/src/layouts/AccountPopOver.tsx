import { FC, useState } from "react";
import { Popover, Typography, Box, Divider, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";

const AccountPopOver: FC = () => {
  const anchor = undefined;
  const [anchorElement, setAnchorElement] = useState(anchor);
  const handleClick = (event): void => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorElement(anchor);
  };
  const { push } = useRouter();

  const open = Boolean(anchorElement);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <IconButton
        color="inherit"
        onClick={handleClick}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
            },
          }),
        }}
      >
        <AccountCircleIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorElement}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{ my: 1.3, width: 400 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Button
            onClick={() =>
              push("profile").then(() => {
                handleClose();
              })
            }
          >
            <Typography variant="subtitle1" noWrap>
              My Profile
            </Typography>
          </Button>
        </Box>
        <Divider sx={{ my: 1 }} />

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button fullWidth color="inherit" variant="outlined" onClick={() => console.log("garah")}>
            Гарах
          </Button>
        </Box>
      </Popover>
    </>
  );
};

export default AccountPopOver;
