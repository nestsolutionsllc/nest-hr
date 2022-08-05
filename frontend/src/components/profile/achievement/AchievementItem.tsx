import React, { FC } from "react";
import { Stack, Typography, Rating } from "@mui/material";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import CircleIcon from "@mui/icons-material/Circle";
import { AchievementItemType } from "../type";

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
    padding: 2,
    width: "100%",
    background: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
  },
};

export const SkillItem = ({ title, rating }: AchievementItemType) => {
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

export const CertificateItem: FC<AchievementItemType> = ({ companyName, title, date }) => {
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

export const AwardItem: FC<AchievementItemType> = ({ date, title, description }) => {
  return (
    <Stack marginBottom={3}>
      <Typography variant="subtitle2">{date}</Typography>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body1">{description}</Typography>
    </Stack>
  );
};
