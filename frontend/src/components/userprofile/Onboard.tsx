import { Typography, Stack } from "@mui/material";

const Onboard = () => {
  return (
    <Stack>
      <Typography variant="h4" sx={{ borderBottom: 1, paddingBottom: 2, borderColor: "#f0f2f5" }}>
        Onboard Checklist
      </Typography>
      <Typography variant="body1">Onboarding section</Typography>
    </Stack>
  );
};

export default Onboard;
