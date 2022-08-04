import React, { ReactNode } from "react";
import { Stack, Typography, Card, CardContent, Divider } from "@mui/material";
import { SkillItem, CertificateItem, AwardItem, LanguageItem } from "./AchievementItem";
import { SKILL_MOCK_DATA, CERTIFICATE_MOCK_DATA, AWARD_MOCK_DATA, LANGUAGE_MOCK_DATA } from "../mockData";
import { LanguageModal } from "./UserModal";

const styles = {
  cardShadow: {
    boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.1)",
  },
  divider: {
    marginTop: 1,
    marginBottom: 4,
    width: "auto",
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

export const Language = () => {
  return (
    <CardHeader genre="Language">
      <LanguageModal />
      <Stack direction="row" flexWrap="wrap" minWidth={1} width="auto">
        {LANGUAGE_MOCK_DATA.map((item, index) => (
          <LanguageItem key={index} {...item} />
        ))}
      </Stack>
    </CardHeader>
  );
};
