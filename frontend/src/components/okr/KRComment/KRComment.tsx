import { FC, useState, useRef, useEffect } from "react";
import { TextField, Box, Button, Typography, Modal, Badge } from "@mui/material";
import DraftsIcon from "@mui/icons-material/Drafts";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CommentBox, { commentDetailType, styles } from "./CommentBox";

const KRComment: FC = () => {
  const [openedAll, setOpenedAll] = useState<boolean>(false);
  const [commentDetails, setCommentDetails] = useState<commentDetailType[]>([]);
  const [replying, setReplying] = useState<boolean>(false);
  const [reply, setReply] = useState<string>("");

  const scrollRef = useRef(null);

  const sendReply = () => {
    if (reply.trim() === "") return;
    setCommentDetails([...commentDetails, { postedBy: "me", postedAt: "Today", comment: reply }]);
    setReply("");
  };

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [commentDetails]);

  return (
    <Box sx={styles.iconHover}>
      <Badge badgeContent={commentDetails.length} onClick={() => setOpenedAll(true)} color={"primary"}>
        <ChatBubbleOutlineIcon color={"action"} fontSize={"medium"} />
      </Badge>
      <Modal sx={styles.modal} open={openedAll} onClose={() => setOpenedAll(false)}>
        <Box sx={styles.commentsContainer}>
          {commentDetails.length ? (
            <Box ref={scrollRef} sx={{ overflowY: "scroll", height: "400px" }}>
              {commentDetails.map((el, ind) => (
                <CommentBox
                  commentDetail={el}
                  commentDetails={commentDetails}
                  setCommentDetails={setCommentDetails}
                  ind={ind}
                />
              ))}
            </Box>
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
              onKeyDown={event => event.code === "Enter" && sendReply()}
            />
            {replying && (
              <Box sx={[styles.buttonContainer, styles.spaceBetween]}>
                <Button variant={"contained"} onClick={sendReply}>
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
