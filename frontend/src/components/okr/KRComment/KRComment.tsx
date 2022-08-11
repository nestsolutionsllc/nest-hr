import { FC, useState } from "react";
import { TextField, Box, Button, Typography, Modal, Badge } from "@mui/material";
import DraftsIcon from "@mui/icons-material/Drafts";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CommentBox, { commentDetailType, styles } from "./CommentBox";

const commentsForThisKR = [
  {
    postedBy: "boss",
    postedAt: "2 days ago",
    comment: "suga okr uusgesen bainaa ho",
  },
  {
    postedBy: "me",
    postedAt: "2 days ago",
    comment: "yuve yanziin shde",
  },
  {
    postedBy: "boss",
    postedAt: "2 days ago",
    comment: "edit hiihgu bol approve hiihgue",
  },
  {
    postedBy: "me",
    postedAt: "2 days ago",
    comment: "zaza",
  },
];

const KRComment: FC = () => {
  const [openedAll, setOpenedAll] = useState<boolean>(false);
  const [comments, setComments] = useState<commentDetailType[]>(commentsForThisKR);
  const [replying, setReplying] = useState<boolean>(false);
  const [reply, setReply] = useState<string>("");
  return (
    <Box sx={styles.iconHover}>
      <Badge badgeContent={comments.length} onClick={() => setOpenedAll(true)} color={"primary"}>
        <ChatBubbleOutlineIcon color={"primary"} fontSize={"medium"} />
      </Badge>
      <Modal sx={styles.modal} open={openedAll} onClose={() => setOpenedAll(false)}>
        <Box sx={styles.commentsContainer}>
          {comments.length ? (
            comments.map(el => <CommentBox commentDetail={el} />)
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
      </Modal>
    </Box>
  );
};

export default KRComment;
