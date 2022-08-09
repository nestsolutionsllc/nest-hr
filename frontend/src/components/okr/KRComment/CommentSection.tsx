import React, { FC, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import DraftsIcon from "@mui/icons-material/Drafts";
import CommentBox, { commentDetailType, styles } from "./CommentBox";

type commentsType = commentDetailType[];

const CommentSection: FC<{
  comments: commentsType;
  setComments: React.Dispatch<React.SetStateAction<commentsType>>;
}> = ({ comments, setComments }) => {
  const [replying, setReplying] = useState<boolean>(false);
  const [reply, setReply] = useState<string>("");

  return (
    <Box sx={styles.commentsContainer}>
      {comments.length ? (
        comments.map(el => <CommentBox commentDetail={el} setReplying={setReplying} />)
      ) : (
        <Box sx={styles.emptyComment}>
          <DraftsIcon style={{ height: "100px", width: "100px" }} />
          <Typography variant={"h6"}>No comment yet.</Typography>
        </Box>
      )}
      <Box sx={styles.replyInputContainer}>
        <TextField
          onChange={event => setReply(event.target.value)}
          value={reply}
          onClick={() => setReplying(true)}
          placeholder={"Reply to @"}
          size={"small"}
          sx={styles.replyInput}
          autoComplete={"off"}
        />
        {replying && (
          <Box sx={[styles.buttonContainer, styles.spaceBetween]}>
            <Button
              variant={"contained"}
              onClick={() => {
                setComments([...comments, { postedBy: "me", postedAt: "Today", comment: reply }]);
                setReply("");
              }}
            >
              Reply
            </Button>
            <Button
              variant={"outlined"}
              onClick={() => {
                setReplying(false);
                setReply("");
              }}
            >
              Cancel
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CommentSection;
