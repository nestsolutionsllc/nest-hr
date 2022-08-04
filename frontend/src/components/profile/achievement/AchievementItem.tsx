import React, { FC } from "react";
import { Stack, Typography, Rating, Card, CardContent, Avatar, CardActions } from "@mui/material";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import CircleIcon from "@mui/icons-material/Circle";
import { SkillItemType, CertificateItemType, AwardItemType, LanguageItemType } from "../type";

const styles = {
  ratingIcon: {
    "& .MuiRating-iconFilled": {
      color: "#1C3879",
    },
    "& .MuiRating-iconHover": {
      color: "#607EAA",
    },
  },
  cardStyle: {
    borderRadius: 3,
    padding: 3,
    width: "40%",
    background: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
    margin: 2,
  },
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
    // alignItems: "center",
    width: 160,
    borderRadius: 2,
    boxShadow: 0,
    p: 1,
    marginTop: 0.3,
  },
};

export const SkillItem = ({ title, rating }: SkillItemType) => {
  return (
    <Stack display="flex" direction="row" justifyContent="space-between" spacing={12}>
      <Typography>{title}</Typography>
      <Rating
        name="skill-rating"
        sx={styles.ratingIcon}
        defaultValue={rating}
        icon={<CircleIcon fontSize="inherit" />}
        emptyIcon={<PanoramaFishEyeIcon fontSize="inherit" />}
        size="small"
        max={10}
      />
    </Stack>
  );
};

export const CertificateItem: FC<CertificateItemType> = ({ companyName, title, date }) => {
  return (
    <Stack sx={styles.cardStyle}>
      <Typography>{companyName}</Typography>
      <Stack marginTop={2}>
        <Typography fontWeight={700}>{title}</Typography>
        <Typography variant="subtitle2" color="black" fontStyle="italic">
          {date}
        </Typography>
      </Stack>
    </Stack>
  );
};

export const AwardItem: FC<AwardItemType> = ({ date, title, description }) => {
  return (
    <Stack marginBottom={3}>
      <Typography variant="subtitle2">{date}</Typography>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body1">{description}</Typography>
    </Stack>
  );
};

export const LanguageItem: FC<LanguageItemType> = ({ countryPhoto, levelOfProficiency, languageName }) => {
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
