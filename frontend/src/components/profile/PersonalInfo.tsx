import { FC, useState } from "react";
import { Typography, Box, Avatar, Stack, Chip, Grid, Link } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Smartphone, Work, GitHub, Edit, LinkedIn, AlternateEmail, DateRange } from "@mui/icons-material";
import ProfileModal from "./ProfileModal";
import { INFO_MOCK_DATA } from "./mockData";

const styles = {
  container: {
    boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  editBtn: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  title: {
    borderBottom: 1,
    paddingBottom: 2,
    borderColor: "#f0f2f5",
  },
  infoBorder: {
    borderLeft: 1,
    borderColor: "#e6e6e6",
  },
  userImg: {
    width: 170,
    height: 180,
  },
  departmentChip: { maxWidth: "100px" },
};

const PersonalInfo: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { lastName, firstName, departmentName, position, email, joiningDate, userPhoto, phoneNumber } = INFO_MOCK_DATA;

  return (
    <Box mb={4} mr={2}>
      <Typography variant="h4" sx={styles.title}>
        Personal information
      </Typography>
      <Grid container sx={styles.container} p={6}>
        <Stack sx={styles.editBtn}>
          <IconButton onClick={() => setShowModal(true)}>
            <Edit />
          </IconButton>
        </Stack>
        {showModal && <ProfileModal showModal={showModal} setShowModal={setShowModal} genre={"info"} />}
        <Grid item lg={2} alignItems="center">
          <Avatar alt="Duluu" src={userPhoto} sx={styles.userImg} />
        </Grid>
        <Grid item lg={3}>
          <Stack display="flex" flexDirection="column" justifyContent="space-evenly" spacing={1}>
            <Typography variant="h5">
              {lastName} {firstName}
            </Typography>
            <Chip label={departmentName} color="primary" sx={styles.departmentChip} />
            <Typography variant="body1">{position}</Typography>
            <Stack flexDirection={"row"}>
              <Link color="inherit" href="https://www.linkedin.com/">
                <LinkedIn sx={{ marginRight: 1 }} />
              </Link>
              <Link color="inherit" href="https://github.com/">
                <GitHub />
              </Link>
            </Stack>
          </Stack>
        </Grid>
        <Grid item lg={3} xs={12}>
          <Stack spacing={3} sx={styles.infoBorder} pl={6}>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Work />
              <Stack>
                <Typography fontWeight={700}>Department</Typography>
                <Typography>{departmentName}</Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <AlternateEmail />
              <Stack>
                <Typography fontWeight={700}>Email</Typography>
                <Typography>{email}</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item lg={3}>
          <Stack spacing={4} sx={styles.infoBorder} pl={6}>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Smartphone />
              <Stack>
                <Typography fontWeight={700}>Contact</Typography>
                <Typography>{phoneNumber}</Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <DateRange />
              <Stack>
                <Typography fontWeight={700}>Joining Date</Typography>
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
