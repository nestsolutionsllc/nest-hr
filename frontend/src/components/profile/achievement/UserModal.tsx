import { useState, FC } from "react";
import {
  Typography,
  Button,
  Fade,
  Modal,
  Box,
  Backdrop,
  Input,
  Stack,
  Theme,
  useTheme,
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const styles = {
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "1px #000",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
  },
  icon: {
    width: 25,
    color: "black",
  },
  edit: {
    height: 25,
    width: 25,
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  confirmButton: {
    width: 100,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#63B6E5",
    marginTop: 3,
    "&:hover": {
      backgroundColor: "#2F86D9",
    },
  },
  cancelButton: {
    width: 100,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#e8e8e8",
    marginTop: 3,
    marginRight: 2,
    "&:hover": {
      backgroundColor: "#D1D1D1",
    },
  },
  inputStyle: {
    display: "flex",
    marginTop: 3,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  inputContainer: {
    display: "flex",
    p: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  input: {
    opacity: 0.6,
    marginBottom: 2,
  },
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const countryLanguages = ["English", "German", "Chinese", "Korean", "Mongolian"];

const getStyles = (languages: string, language: string[], theme: Theme) => {
  return {
    fontWeight:
      language.indexOf(languages) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
  };
};

export const LanguageModal = () => {
  const theme = useTheme();
  const [language, setlanguage] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof language>) => {
    const {
      target: { value },
    } = event;
    setlanguage(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Stack>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-languages-label">Languages</InputLabel>
        <Select
          labelId="demo-multiple-languages-label"
          id="demo-multiple-languages"
          multiple
          value={language}
          onChange={handleChange}
          input={<OutlinedInput label="languages" />}
          MenuProps={MenuProps}
        >
          {countryLanguages.map(languages => (
            <MenuItem key={languages} value={languages} style={getStyles(languages, language, theme)}>
              {languages}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};

export const UserModal: FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Stack>
      <Button sx={styles.edit} onClick={handleOpen}>
        <MoreHorizIcon sx={styles.icon} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={styles.container}>
            <Typography fontWeight={"bold"} color={"black"} margin={1} variant="h5">
              Edit User Info
            </Typography>
            <Box sx={styles.inputContainer}>
              <Box sx={styles.inputStyle}>
                <Input sx={styles.input} placeholder="Job Title"></Input>
              </Box>
              <Box sx={styles.inputStyle}>
                <Input sx={styles.input} placeholder="Company languages"></Input>
              </Box>
              <Box sx={styles.inputStyle}>
                <Input sx={styles.input} placeholder="Location"></Input>
              </Box>
              <Box sx={styles.inputStyle}>
                <Input sx={styles.input} placeholder="Job Title"></Input>
              </Box>
            </Box>
            <Box sx={styles.buttons}>
              <Button onClick={handleClose} sx={styles.cancelButton}>
                <Typography fontSize={14} color={"#444444"}>
                  Cancel
                </Typography>
              </Button>
              <Button sx={styles.confirmButton}>
                <Typography fontSize={14} color={"White"}>
                  Save
                </Typography>
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Stack>
  );
};
