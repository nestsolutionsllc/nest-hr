import { Card, CardActions, CardContent, Typography, Avatar } from "@mui/material";
import { LANGUAGE_MOCK_DATA } from "./mockData";

const styles = {
  container: {
    maxWidth: 830,
    p: 1,
    borderRadius: 4,
    border: "1px solid #efefef",
    boxShadow: 0,
  },
  card: {
    width: 230,
    height: 70,
    border: "2px solid #efefef",
    borderRadius: 3,
    m: 1,
    display: "flex",
    justifyContent: "flex-start",
    boxShadow: 0,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: 0.5,
  },
  contentContainer: {
    marginTop: 2,
    marginLeft: 3,
    p: 0,
  },
  circle: {
    width: 38,
    height: 38,
    borderRadius: 5,
    backgroundColor: "black",
    margin: 1.7,
    marginLeft: 1.8,
  },
  languageContainer: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "flex-start",
    alignItems: "center",
    width: 160,
    borderRadius: 2,
    marginRight: 3,
    p: 1.3,
    boxShadow: 0,
  },
};
export const LanguageCard = () => {
  const { languageName, levelOfProficiency, countryPhoto } = LANGUAGE_MOCK_DATA;
  return (
    <Card sx={styles.container}>
      <CardContent sx={styles.contentContainer}>
        <Typography fontWeight={"bold"} gutterBottom variant="h5" component="div">
          Language
        </Typography>
      </CardContent>
      <CardActions sx={styles.buttonContainer}>
        <Card sx={styles.card}>
          <Avatar src={countryPhoto} sx={styles.circle} />
          <Card sx={styles.languageContainer}>
            <Typography fontWeight={"bold"}>{languageName}</Typography>
            <Typography fontWeight={"bold"} fontSize={13} sx={{ opacity: 0.3 }}>
              {levelOfProficiency}
            </Typography>
          </Card>
        </Card>
        <Card sx={styles.card}>
          <Avatar src={countryPhoto} sx={styles.circle} />
          <Card sx={styles.languageContainer}>
            <Typography fontWeight={"bold"}>{languageName}</Typography>
            <Typography fontWeight={"bold"} fontSize={13} sx={{ opacity: 0.3 }}>
              {levelOfProficiency}
            </Typography>
          </Card>
        </Card>
        <Card sx={styles.card}>
          <Avatar src={countryPhoto} sx={styles.circle} />
          <Card sx={styles.languageContainer}>
            <Typography fontWeight={"bold"}>{languageName}</Typography>
            <Typography fontWeight={"bold"} fontSize={13} sx={{ opacity: 0.3 }}>
              {levelOfProficiency}
            </Typography>
          </Card>
        </Card>
      </CardActions>
    </Card>
  );
};

export default LanguageCard;
