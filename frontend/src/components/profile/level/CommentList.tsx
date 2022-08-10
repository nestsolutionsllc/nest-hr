import { FC } from "react";
import { Box, Avatar, Typography, Stack } from "@mui/material";
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
  category: {
    fontSize: 10,
  },
  stack: {
    justifyContent: "space-between",
  },
};

const CommentList: FC<LadderCommentItemType> = ({ name, img, comment, category }) => {
  return (
    <Box sx={styles.container}>
      <Stack direction="row" sx={styles.stack}>
        <Stack direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src={img} />
          <Typography variant="h6" component="h6">
            {name}
          </Typography>
        </Stack>
        <Box sx={styles.category}>{category}</Box>
      </Stack>
      <Typography mt={2} sx={styles.typo}>
        {comment}
      </Typography>
    </Box>
  );
};

export default CommentList;
