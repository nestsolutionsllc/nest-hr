import { Typography, Stack, Box, Divider } from "@mui/material";
import Ladder from "../../okr/ladder/Ladder";
import CommentListIndex from "./CommentList";
import { COMMENT_MOCK_DATA } from "../mockData";

const styles = {
  title: {
    paddingBottom: 2,
    marginTop: 2,
  },
  divider: {
    border: "1px solid #f0f2f5",
    marginBottom: "10px",
  },
  commentContainer: {
    maxHeight: "60vh",
    overflowY: "scroll",
  },
};

const Level = () => {
  return (
    <Stack>
      <Typography variant="h4" sx={styles.title}>
        Ladder level
      </Typography>
      <Divider sx={styles.divider} orientation="horizontal" />
      <Stack
        direction="row"
        divider={<Divider sx={styles.divider} orientation="vertical" flexItem />}
        mt={3}
        spacing={8}
      >
        <Box display={"flex"} justifyItems={"center"} width={"500px"}>
          <Ladder label={"Current"} />
        </Box>
        <Stack divider={<Divider sx={styles.divider} orientation="horizontal" flexItem />}>
          <Typography variant="h4" mb={2} style={styles.title}>
            Comment List
          </Typography>
          <Box sx={styles.commentContainer}>
            {COMMENT_MOCK_DATA.commentData.map((singleComment, index) => {
              return (
                <CommentListIndex
                  key={index}
                  name={singleComment.name}
                  img={singleComment.img}
                  comment={singleComment.comment}
                  category={singleComment.category}
                />
              );
            })}
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Level;
