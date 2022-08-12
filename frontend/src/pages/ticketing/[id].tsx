import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { TicketType, usersImgUrl } from "../../components/ticket/type";
import TicketDetail from "../../components/ticket/TicketDetail";
import fetchTicket from "../../components/ticket/fetch-utility";

const blankProfile =
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80";

const styles = {
  container: {
    backgroundColor: "white",
    overflow: "none!important",
    height: "100vh",
    p: 3,
    boxSizing: "border-box",
  },
  historyDescContainer: {
    width: "100%",
    height: "100%",
    pb: 16,
  },
  backArrow: { padding: 0, marginBottom: 4, color: "#42526E", textTransform: "none", fontSize: 15 },
  flex: { display: "flex" },
  reportDescriptionContainer: {
    border: "1px solid #dfe1e6",
    boxShadow: "10px 10px 10px #dfe1e6",
    borderRadius: 1,
    p: 2,
    mt: 5,
  },
  img: { borderRadius: 20, width: 30, height: 30 },
  historyContainer: { py: 10 },
  ml2: { ml: 2 },
  mt2: { mt: 2 },
  ml1: { ml: 1 },
  mr2: { mr: 2 },
  mb: { mb: 2 },
  mx1: { mx: 1 },
  mt3: { mt: 3 },
  mx2: { mx: 2 },
  mr1: { mr: 1 },
  bold: { fontWeight: "bold" },
  historyBorder: { display: "flex", py: 3, borderTop: "1px solid #dfe1e6" },
  historyContent: { display: "flex", flexDirection: "column" },
  grey: { color: "#42526E" },
  ticketDetailContainerDesk: { ml: 6, height: 400, width: 400 },
  ticketDetailContainerMobile: { width: "100%", ml: 0, mt: 7 },
  historyFlow: { overflow: "auto", height: "100%", pr: 4 },
};

const Ticket = () => {
  const router = useRouter();
  const { id } = router.query;
  const [curr, setCurrent] = useState<TicketType>();
  const [error, setError] = useState<boolean>(false);
  const [user, setUser] = useState("jigmee");
  const [loading, setLoading] = useState("");
  const isDesktop = useMediaQuery("(min-width:950px)");
  const getData = async () => {
    try {
      const data: TicketType = await fetchTicket(`${process.env.TICKET_SYSTEM_ENDPOINT_URL}/ticket/${id}`, "GET");
      setUser(data.assignee_id);
      setCurrent(data);
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };
  useEffect(() => {
    if (!id) return;
    getData();
  }, [id, user]);

  const differTime = createdTime => {
    const now = new Date();
    const date = new Date(createdTime);
    const sec: number = (now.getTime() - date.getTime()) / 1000;
    if (sec > 86400) {
      return ` ${Math.round(sec / 86400)} day ago`;
    }
    if (sec > 3600) {
      return ` ${Math.round(sec / 3600)} hour ago`;
    }
    if (sec > 60) {
      return ` ${Math.round(sec / 60)} min ago`;
    }
    if (sec < 10) {
      return "just now";
    }
    return `${Math.round(sec)} sec ago`;
  };

  return error ? (
    <Typography>Error </Typography>
  ) : (
    <Box sx={styles.container}>
      {curr !== undefined ? (
        <Box sx={{ ...styles.flex, flexDirection: isDesktop ? "row" : "column", height: "100%" }}>
          <Box sx={styles.historyDescContainer}>
            <Link href={"/ticketing/daily"}>
              <Button sx={styles.backArrow}>
                <ArrowBackIcon /> Back
              </Button>
            </Link>
            <Box sx={styles.historyFlow}>
              <Box>
                <Typography variant={"h6"} fontWeight={"bold"}>
                  {curr?.summary}
                </Typography>
              </Box>
              <Box sx={styles.reportDescriptionContainer}>
                <Box sx={styles.flex}>
                  <Image width={30} height={30} src={blankProfile} style={styles.img} />
                  <Typography sx={styles.ml2}>{curr?.reporter_id}</Typography>
                </Box>
                <Typography style={styles.bold} sx={styles.mt2}>
                  Description
                </Typography>
                <Typography>{curr?.description}</Typography>
              </Box>
              {!isDesktop && (
                <Box sx={styles.ticketDetailContainerMobile}>
                  <TicketDetail
                    curr={curr}
                    setCurrent={setCurrent}
                    loading={loading}
                    setLoading={setLoading}
                    user={user}
                    setUser={setUser}
                  />
                </Box>
              )}
              <Box sx={styles.historyContainer} data-testid={"history"}>
                <Typography sx={styles.bold}> History </Typography>
                {curr?.history?.map(item => {
                  const time = differTime(item.createdAt);
                  return (
                    <Box sx={styles.historyBorder} key={item._id}>
                      <Box sx={styles.mr2}>
                        <Image
                          width={30}
                          height={30}
                          style={styles.img}
                          src={
                            usersImgUrl[item?.changedBy?.name] !== undefined
                              ? usersImgUrl[item?.changedBy?.name]
                              : blankProfile
                          }
                        />
                      </Box>
                      <Box sx={styles.historyContent}>
                        <Box sx={styles.flex}>
                          <Typography sx={{ ...styles.bold, ...styles.mr1 }}>{item?.changedBy?.name}</Typography>{" "}
                          changed the <Typography sx={{ ...styles.bold, ...styles.mx1 }}>{item?.changed}</Typography>{" "}
                          <Typography sx={styles.grey}>{time}</Typography>
                        </Box>
                        <Box>
                          {item.changed === "status" || item.changed === "priority" ? (
                            <Box sx={{ ...styles.flex, ...styles.mt3 }}>
                              <Typography sx={styles.bold}>{item.changedFrom}</Typography>{" "}
                              <ArrowForwardIcon sx={styles.mx1} />
                              <Typography sx={styles.bold}>{item.changedTo}</Typography>
                            </Box>
                          ) : (
                            <Box sx={{ ...styles.flex, ...styles.mt3 }}>
                              <Image
                                style={styles.img}
                                width={30}
                                height={30}
                                src={
                                  usersImgUrl[item?.changedFrom] !== undefined
                                    ? usersImgUrl[item?.changedFrom]
                                    : blankProfile
                                }
                              />
                              <Typography sx={styles.ml1}>{item.changedBy.name}</Typography>{" "}
                              <ArrowForwardIcon sx={styles.mx2} />{" "}
                              <Image
                                style={styles.img}
                                src={
                                  usersImgUrl[item?.changedTo] !== undefined
                                    ? usersImgUrl[item?.changedTo]
                                    : blankProfile
                                }
                                width={30}
                                height={30}
                              />{" "}
                              <Typography sx={styles.ml1}>{item.changedTo}</Typography>
                            </Box>
                          )}
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
          {isDesktop && (
            <Box sx={styles.ticketDetailContainerDesk}>
              <TicketDetail
                curr={curr}
                setCurrent={setCurrent}
                loading={loading}
                setLoading={setLoading}
                user={user}
                setUser={setUser}
              />
            </Box>
          )}
        </Box>
      ) : (
        <Typography>loading</Typography>
      )}
    </Box>
  );
};

export default Ticket;
