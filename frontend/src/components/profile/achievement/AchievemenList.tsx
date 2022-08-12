import React, { ReactNode, useState } from "react";
import { Stack, Card, CardHeader, CardContent, Grid, Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { SkillItem, CertificateItem, AwardItem } from "./AchievementItem";
import ProfileModal from "../ProfileModal";

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

export const Achievements = ({ achievementData }) => {
  return (
    <>
      {achievementData ? (
        achievementData.map((achievement, index) => {
          return (
            <CardSection genre={achievement.category} key={index}>
              <Stack spacing={2} direction={achievement.category === "certificates" ? "row" : "column"}>
                {achievement.data.map((d, id) => {
                  return (
                    <Box key={id}>
                      {achievement.category === "skills" && <SkillItem {...d} />}
                      {achievement.category === "certificates" && (
                        <Stack>
                          <CertificateItem {...d} />
                        </Stack>
                      )}
                      {achievement.category === "awards" && <AwardItem {...d} />}
                    </Box>
                  );
                })}
              </Stack>
            </CardSection>
          );
        })
      ) : (
        <Typography>No Achievement</Typography>
      )}
    </>
  );
};
