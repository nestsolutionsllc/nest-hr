/* eslint-disable @typescript-eslint/no-unused-vars */
import { Typography, Stack, Box, Divider } from "@mui/material";
import { FC, useState } from "react";
import Ladder from "../../okr/ladder/Ladder";
import CommentListIndex from "./CommentList";
import { COMMENT_MOCK_DATA } from "../mockData";
import { LadderCommentItemType } from "../type";

const styles = {
  title: {
    paddingBottom: 2,
    marginTop: 2,
  },
  divider: {
    border: "1px solid #f0f2f5",
  },
};

const Level: FC = () => {
  // eslint-disable-next-line no-unused-vars
  const [commentList, setCommentList] = useState<LadderCommentItemType[]>(COMMENT_MOCK_DATA.commentData);

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
          {commentList.map((obj, index) => {
            return (
              <CommentListIndex key={index} name={obj.name} img={obj.img} comment={obj.comment}></CommentListIndex>
            );
          })}
        </Stack>
      </Stack>
      <Typography variant="body1">Ladder level section</Typography>
    </Stack>
  );
};

export default Level;
