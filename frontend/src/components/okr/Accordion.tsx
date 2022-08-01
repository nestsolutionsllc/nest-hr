import { ReactNode } from "react";
import { styled } from "@mui/material/styles";
// Material UI Components
import { Box, Button, Typography, IconButton, Popover } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, { AccordionSummaryProps } from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
// Import Material Icons
import EditIcon from "@mui/icons-material/Edit";
import MoreIcon from "@mui/icons-material/MoreVert";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
  ({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  })
);

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<FactCheckOutlinedIcon sx={{ fontSize: "0.9rem", color: "red" }} />} {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(0deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
    alignItems: "center",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

// Linear Progress Bar customizing
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const OkrAccordion = ({
  title,
  anchorEl,
  open,
  expanded,
  okrValue,
  handleChange,
  handleClick,
  handleClose,
}): ReactNode => {
  return (
    <Accordion expanded={expanded === "okrPanel1"} onChange={handleChange("okrPanel1")}>
      <AccordionSummary aria-controls="panel1d-content" id="okrPanel1">
        <Typography>{title}</Typography>
        <BorderLinearProgress sx={{ marginLeft: 5, width: "50%" }} variant="determinate" value={okrValue} />
        <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "end" }}>
          <IconButton
            onClick={event => {
              event.stopPropagation();
              handleClick(event);
            }}
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
          amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box>
          <Button sx={{ width: "100%", textAlign: "left" }} variant="text" startIcon={<EditIcon />}>
            Edit
          </Button>
        </Box>
        <Box>
          <Button sx={{ width: "100%" }} variant="text" startIcon={<EditIcon />}>
            Change KR Weight
          </Button>
        </Box>
      </Popover>
    </Accordion>
  );
};

export default OkrAccordion;
