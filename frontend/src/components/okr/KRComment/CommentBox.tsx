import React, { FC, useState } from "react";
import { TextField, Box, Button, Avatar, Typography, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const styles = {
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
  commentsContainer: {
    backgroundColor: "white",
    maxWidth: "400px",
    padding: "5px",
    borderRadius: "10px",
    maxHeight: "600px",
    overflowY: "scroll",
    outline: 0,
  },
  commentContainer: {
    flexDirection: "column",
    minWidth: "200px",
    maxWidth: "400px",
    padding: "10px",
    minHeight: "70px",
    borderBottom: "1px solid #dadce0",
  },
  detailContainer: {
    maxWidth: "300px",
    marginLeft: "20px",
  },
  buttonContainer: {
    marginTop: "10px",
    width: "50%",
  },
  blackText: {
    color: "black",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  spaceBetween: {
    display: "flex",
    justifyContent: "space-between",
  },
  replyInputContainer: {
    padding: "10px",
  },
  replyInput: {
    width: "90%",
  },
  editButton: {
    display: "flex",
    justifyContent: "flex-end",
  },
  marginTop: {
    marginTop: "8px",
  },
  emptyComment: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export type commentDetailType = {
  postedBy: string;
  postedAt: string;
  comment: string;
};

const userId = "me";

const CommentBox: FC<{
  commentDetail: commentDetailType;
}> = ({ commentDetail }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [editing, setEditing] = useState<boolean>(false);
  const [editedComment, setEditedComment] = useState<string>("");
  return (
    <Box sx={[styles.commentContainer, styles.spaceBetween]}>
      <Box sx={[styles.spaceBetween, styles.flexRow]}>
        <Box sx={styles.flexRow}>
          <Avatar />
          <Box sx={styles.detailContainer}>
            <Typography variant={"subtitle1"}>{commentDetail.postedBy}</Typography>
            <Typography color={"#b2b2b2"} variant={"body2"}>
              {commentDetail.postedAt}
            </Typography>
          </Box>
        </Box>
        {userId === commentDetail.postedBy && (
          <Button
            sx={styles.editButton}
            aria-controls={open ? "more-actions" : undefined}
            aria-haspopup={true}
            aria-expanded={open ? "true" : undefined}
            onClick={event => setAnchorEl(event.currentTarget)}
          >
            <MoreVertIcon sx={styles.blackText} />
          </Button>
        )}
      </Box>
      <Menu open={open} id="more-actions" anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
        <MenuItem
          onClick={() => {
            setEditing(true);
            setAnchorEl(null);
          }}
        >
          Edit
        </MenuItem>
        <MenuItem
          onClick={() => {
            console.log("deleted from db");
            setAnchorEl(null);
          }}
        >
          Delete
        </MenuItem>
      </Menu>

      {editing ? (
        <TextField
          sx={styles.marginTop}
          multiline={true}
          size={"small"}
          value={editedComment}
          onChange={event => setEditedComment(event.target.value)}
        />
      ) : (
        <Typography sx={styles.marginTop} variant={"body1"}>
          {commentDetail.comment}
        </Typography>
      )}

      {editing && (
        <Box sx={[styles.buttonContainer, styles.spaceBetween]}>
          <Button
            variant={"contained"}
            onClick={() => {
              console.log("updated to db");
              setEditing(false);
            }}
          >
            Save
          </Button>
          <Button
            variant={"outlined"}
            onClick={() => {
              setEditing(false);
              setEditedComment("");
            }}
          >
            Cancel
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default CommentBox;
