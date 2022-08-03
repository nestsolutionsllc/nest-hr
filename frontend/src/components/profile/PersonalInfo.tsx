import { FC } from "react";
import { Typography, Box, Avatar, Stack, Chip, Grid } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { INFO_MOCK_DATA } from "./mockData";

const styles = {
  container: {
    boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    borderBottom: 1,
    paddingBottom: 2,
    borderColor: "#f0f2f5",
  },
  infoBorder: {
    borderLeft: 0.2,
  },
  avatar: {
    width: "70%",
    height: "100%",
  },
  departmentChip: { maxWidth: "200px" },
};

const PersonalInfo: FC = () => {
  const { lastName, firstName, departmentName, position, email, salary, joiningDate, userPhoto } = INFO_MOCK_DATA;
  return (
    <Box mb={4} mr={2}>
      <Typography variant="h4" sx={styles.title}>
        Personal information
      </Typography>
      <Grid container sx={styles.container} p={6}>
        <Grid item lg={2} alignItems="center">
          <Avatar alt="Duluu" src={userPhoto} sx={styles.avatar} />
        </Grid>
        <Grid item lg={3}>
          <Box display={"flex"} flexDirection="column" justifyContent={"space-evenly"}>
            <Typography variant="h5">
              {lastName} {firstName}
            </Typography>
            <Chip label={departmentName} color="primary" sx={styles.departmentChip} />
            <Typography variant="body1">{position}</Typography>

            {/* Social media account if we need later  */}

            {/* <Typography variant="body1">Social media account</Typography> */}
          </Box>
        </Grid>
        <Grid item lg={3} xs={12}>
          <Stack spacing={3} sx={styles.infoBorder} pl={6}>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <BusinessCenterIcon />
              <Stack>
                <Typography>Department</Typography>
                <Typography>{departmentName}</Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <BusinessCenterIcon />
              <Stack>
                <Typography>Email</Typography>
                <Typography>{email}</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item lg={3}>
          <Stack spacing={4} sx={styles.infoBorder} pl={6}>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <BusinessCenterIcon />
              <Stack>
                <Typography>Salary</Typography>
                <Typography>{salary}</Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <BusinessCenterIcon />
              <Stack>
                <Typography>Joining Date</Typography>
                <Typography>{joiningDate.toDateString()}</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonalInfo;
