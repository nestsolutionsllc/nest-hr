import React, { ReactNode } from "react";
import { Stack, Typography, Card, CardContent, Divider } from "@mui/material";
import { SkillItem, CertificateItem } from "./AchievementItem";

const skillItems = [
  { title: "HTML/CSS", rating: 3 },
  { title: "JavaScript", rating: 4 },
  { title: "React", rating: 6 },
  { title: "UI Design", rating: 4 },
  { title: "Problem solver", rating: 2 },
  { title: "Teamwork", rating: 7 },
];

const certificateItems = [
  {
    companyName: "Amazon Web Service (AWS)",
    title: "AWS Certified DevOps Engineer - Professional",
    date: "2022 - 2025",
  },
  {
    companyName: "Microsoft Azure",
    title: "Microsoft Certified Azure Solutions Architect",
    date: "2018 - 2021",
  },
  {
    companyName: "PMI",
    title: "Agile Certified Practitioner (ACP)",
    date: "2017 - 2019",
  },
  {
    companyName: "Google",
    title: "Google UX Design",
    date: "2019",
  },
];

const styles = {
  cardShadow: {
    boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.1)",
    width: "70%",
  },
};

const CardHeader = ({ children, genre }: { children: ReactNode; genre: string }) => {
  return (
    <Card sx={styles.cardShadow}>
      <CardContent>
        <Stack>
          <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
            {genre}
          </Typography>
        </Stack>
        <Divider sx={{ marginTop: 1, marginBottom: 4 }} />
        {children}
      </CardContent>
    </Card>
  );
};

export const Skill = () => {
  return (
    <CardHeader genre="Skills">
      <Stack spacing={2}>
        {skillItems.map((item, index) => (
          <SkillItem key={index} {...item} />
        ))}
      </Stack>
    </CardHeader>
  );
};

export const Certificate = () => {
  return (
    <CardHeader genre="Certifications">
      <Stack direction="row" flexWrap="wrap">
        {certificateItems.map((item, index) => (
          <CertificateItem key={index} {...item} />
        ))}
      </Stack>
    </CardHeader>
  );
};

export const Awards = () => {
  return (
    <CardHeader genre="Awards">
      <Stack>
        <Typography variant="subtitle2">2015</Typography>
        <Typography variant="h5">Art of the week</Typography>
        <Typography variant="body1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, provident? Quos laborum repellat cumque iure
          sapiente nihil laudantium beatae non, eaque perferendis sint eligendi dolor iste tempora quibusdam dicta
          expedita.
        </Typography>
      </Stack>
    </CardHeader>
  );
};
