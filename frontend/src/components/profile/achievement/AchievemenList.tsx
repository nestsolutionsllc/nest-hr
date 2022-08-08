import React, { ReactNode, useState } from "react";
import { Stack, Card, CardHeader, CardContent, Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { SkillItem, CertificateItem, AwardItem, LanguageItem } from "./AchievementItem";
import ProfileModal from "../ProfileModal";
import { ACHIEVEMENT_MOCK_DATA } from "../mockData";

const styles = {
  cardShadow: {
    boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.1)",
  },
  header: {
    "& span": {
      fontWeight: 700,
      textTransform: "capitalize",
    },
  },
  language: {
    display: "flex",
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
                    {item.category === "languages" && <LanguageItem {...d} />}
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
