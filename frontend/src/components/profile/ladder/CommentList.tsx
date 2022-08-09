import { FC } from "react";
import { Box, Avatar, Divider, Typography, Stack } from "@mui/material";
import { LadderCommentItemType } from "../type";

const styles = {
  container: {
    marginTop: 2,
    boxShadow: "0 2px 8px 0 rgb(5 34 97 / 10%)",
    borderRadius: 4,
    padding: 3,
    maxWidth: "500px",
  },
  typo: {
    fontSize: 15,
  },
};

const Alim: FC<LadderCommentItemType> = ({ name, img, comment }) => {
  return (
    <Box sx={styles.container}>
      <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
        <Avatar alt="Remy Sharp" src={img} />
        <Typography variant="h6" component="h6">
          {name}
        </Typography>
      </Stack>
      <Typography mt={2} sx={styles.typo}>
        {comment}
      </Typography>
    </Box>
  );
};

export default Alim;
