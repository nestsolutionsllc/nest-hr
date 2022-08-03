import React, { FC } from "react";
import { Stack, Typography, Rating } from "@mui/material";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import CircleIcon from "@mui/icons-material/Circle";

interface SkillItemProps {
  title: string;
  rating: number;
}

interface CertificateItemProps {
  companyName: string;
  title: string;
  date: string;
}

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
};

export const SkillItem: FC<SkillItemProps> = ({ title, rating }) => {
  // const [rating, setRating] = useState(0);
  // const handleChangeRating = (event: SyntheticEvent, newValue) => {
  //   setRating(newValue);
  // };

  return (
    <Stack display="flex" direction="row" justifyContent="space-between" spacing={12}>
      <Typography>{title}</Typography>
      <Rating
        name="skill-rating"
        sx={styles.ratingIcon}
        defaultValue={rating}
        getLabelText={(value: number) => `${value} Heart${value !== 1 ? "s" : ""}`}
        icon={<CircleIcon fontSize="inherit" />}
        emptyIcon={<PanoramaFishEyeIcon fontSize="inherit" />}
        size="small"
        max={10}
      />
    </Stack>
  );
};

export const CertificateItem: FC<CertificateItemProps> = ({ companyName, title, date }) => {
  return (
    <Stack sx={styles.cardStyle}>
      <Typography>{companyName}</Typography>
      <Stack sx={{ marginTop: 2 }}>
        <Typography fontWeight={700}>{title}</Typography>
        <Typography variant="subtitle2" color="black" fontStyle="italic">
          {date}
        </Typography>
      </Stack>
    </Stack>
  );
};
