import { useState, ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { NewSideBar } from "../components";
import useWindowSize from "../hooks/useWindowSize";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const { width } = useWindowSize();
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CssBaseline />
      <div>{/* Header Will Be Here */}</div>
      <div>
        <NewSideBar open={open} setOpen={setOpen} />
        <div
          style={{
            width: width != null ? width - (open ? 250 : 30) : "100%",
            transition: "all 0.3s ease-in-out",
            marginLeft: open ? "250px" : "30px",
          }}
        >
          {children}
        </div>
      </div>
    </Box>
  );
};

export default MainLayout;
