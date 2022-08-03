import React, { ReactNode } from "react";
import { Stack, Typography, Card, CardContent, Divider } from "@mui/material";
import { SkillItem, CertificateItem, AwardItem } from "./AchievementItem";
import { SKILL_MOCK_DATA, CERTIFICATE_MOCK_DATA, AWARD_MOCK_DATA } from "../mockData";

const styles = {
  cardShadow: {
    boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.1)",
  },
  divider: {
    marginTop: 1,
    marginBottom: 4,
  },
};

const CardHeader = ({ children, genre }: { children: ReactNode; genre: string }) => {
  return (
    <Card sx={styles.cardShadow}>
      <CardContent>
        <Stack>
          <Typography variant="h5" textTransform="uppercase">
            {genre}
          </Typography>
        </Stack>
        <Divider sx={styles.divider} />
        {children}
      </CardContent>
    </Card>
  );
};

export const Skill = () => {
  return (
    <CardHeader genre="Skills">
      <Stack spacing={2}>
        {SKILL_MOCK_DATA.map((item, index) => (
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
        {CERTIFICATE_MOCK_DATA.map((item, index) => (
          <CertificateItem key={index} {...item} />
        ))}
      </Stack>
    </CardHeader>
  );
};

export const Awards = () => {
  return (
    <CardHeader genre="Awards">
      {AWARD_MOCK_DATA.map((item, index) => (
        <AwardItem key={index} {...item} />
      ))}
    </CardHeader>
  );
};
