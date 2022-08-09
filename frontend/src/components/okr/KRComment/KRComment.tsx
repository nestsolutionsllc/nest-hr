import { FC, useState } from "react";
import { Box, Modal, Badge } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CommentSection from "./CommentSection";
import { commentDetailType } from "./CommentBox";

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

const styles = {
  container: {
    backgroundColor: "#fafafa",
    border: "1px solid #e1e1e1",
    maxHeight: "110px",
    marginLeft: "50px",
    minWidth: "300px",
    borderRadius: "20px",
    marginTop: "auto",
    marginBottom: "auto",
    padding: "5px",
  },
  modal: {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    marginLeft: "-200px",
    marginTop: "-300px",
  },
  iconHover: {
    cursor: "pointer",
  },
};

const KRComment: FC = () => {
  const [openedAll, setOpenedAll] = useState<boolean>(false);
  const [comments, setComments] = useState<commentDetailType[]>(commentsForThisKR);
  return (
    <Box sx={styles.iconHover}>
      <Badge badgeContent={comments.length} onClick={() => setOpenedAll(true)} color={"primary"}>
        <ChatBubbleOutlineIcon color={"primary"} fontSize={"medium"} />
      </Badge>
      <Modal sx={styles.modal} open={openedAll} onClose={() => setOpenedAll(false)}>
        <CommentSection comments={comments} setComments={setComments} />
      </Modal>
    </Box>
  );
};

export default KRComment;
