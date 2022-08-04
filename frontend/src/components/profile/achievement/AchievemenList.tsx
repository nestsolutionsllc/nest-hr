<<<<<<< HEAD
import React, { ReactNode, useState } from "react";
import { Stack, Card, CardHeader, CardContent, Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { SkillItem, CertificateItem, AwardItem } from "./AchievementItem";
import ProfileModal from "../ProfileModal";
import { ACHIEVEMENT_MOCK_DATA } from "../mockData";
=======
import React, { ReactNode } from "react";
import { Stack, Typography, Card, CardContent, Divider } from "@mui/material";
import { SkillItem, CertificateItem, AwardItem, LanguageItem } from "./AchievementItem";
import { SKILL_MOCK_DATA, CERTIFICATE_MOCK_DATA, AWARD_MOCK_DATA, LANGUAGE_MOCK_DATA } from "../mockData";
<<<<<<< HEAD
>>>>>>> eee297e (refactor: rebased)
=======
import { LanguageModal } from "./UserModal";
>>>>>>> cbaa368 (feat: added language card and selector)

const styles = {
  cardShadow: {
    boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.1)",
  },
<<<<<<< HEAD
  header: {
    "& span": {
      fontWeight: 700,
      textTransform: "capitalize",
    },
=======
  divider: {
    marginTop: 1,
    marginBottom: 4,
    width: "auto",
>>>>>>> cbaa368 (feat: added language card and selector)
  },
};

export const CardSection = ({ children, genre }: { children: ReactNode; genre: string }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Grid item md={5}>
      <Card sx={styles.cardShadow}>
        <CardHeader
          title={genre}
          action={
            <IconButton onClick={() => setShowModal(true)}>
              <EditIcon />
            </IconButton>
          }
          sx={styles.header}
        />
        {showModal && <ProfileModal showModal={showModal} setShowModal={setShowModal} genre={genre} />}
        <CardContent>{children}</CardContent>
      </Card>
    </Grid>
  );
};

export const Achievements = () => {
  return (
    <>
      {ACHIEVEMENT_MOCK_DATA.map((item, index) => {
        return (
          <CardSection genre={item.category} key={index}>
            <Stack spacing={2} direction={item.category === "certificates" ? "row" : "column"}>
              {item.data.map(d => {
                return (
                  <>
                    {item.category === "skills" && <SkillItem {...d} />}
                    {item.category === "certificates" && (
                      <Stack>
                        <CertificateItem {...d} />
                      </Stack>
                    )}
                    {item.category === "awards" && <AwardItem {...d} />}
                  </>
                );
              })}
            </Stack>
          </CardSection>
        );
      })}
    </>
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
