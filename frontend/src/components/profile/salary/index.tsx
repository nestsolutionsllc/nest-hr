import { FC } from "react";
import { Typography, Grid, Box, Stack } from "@mui/material";
import AnimatedNumber from "react-animated-number";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import PaidIcon from "@mui/icons-material/Paid";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { INFO_MOCK_DATA, CHART_MOCK_DATA } from "../mockData";

ChartJS.register(ArcElement, Tooltip, Legend);

const styles = {
  title: {
    borderBottom: 1,
    paddingBottom: 2,
    borderColor: "#f0f2f5",
  },
  cardStyle: {
    alignItems: "center",
    borderRadius: 3,
    padding: 3,
    width: "60%",
    background: "white",
    border: 0.1,
    margin: 2,
  },
  chartContainer: {
    alignItems: "center",
    borderRadius: 3,
    width: "100%",
    background: "#f1f4fd",
    margin: 2,
  },
  animatedNumber: {
    transition: "0.2s ease-out",
    fontWeight: 700,
    transitionProperty: "background-color, color, opacity",
    color: "#3a4aa7",
  },
};

const Salary: FC = () => {
  const { salary: personalSalary } = INFO_MOCK_DATA;
  const { salaryDetail } = CHART_MOCK_DATA;
  const chartData = {
    labels: salaryDetail.map(tax => tax.name),
    datasets: [
      {
        label: "# of Votes",
        data: salaryDetail.map(tax => tax.total),
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Box>
      <Typography variant="h4" sx={styles.title}>
        My Salary
      </Typography>
      <Grid container>
        <Grid item xs={6} md={3}>
          <Box display={"flex"} flexDirection="column" alignItems={"center"}>
            <Stack sx={styles.cardStyle}>
              <PaidIcon color="secondary" />
              <Stack marginTop={1} alignItems="center">
                <Typography fontWeight={700}>Тotal Pay Amount</Typography>
                <AnimatedNumber
                  component="number"
                  value={personalSalary}
                  style={styles.animatedNumber}
                  frameStyle={perc => (perc > 20 && perc < 80 ? { opacity: 0.5 } : {})}
                  duration={300}
                  formatValue={num => Number(num).toFixed(2)}
                />
              </Stack>
            </Stack>
            <Stack sx={styles.cardStyle}>
              <AccountBalanceWalletIcon color="error" />
              <Stack marginTop={1} alignItems="center">
                <Typography fontWeight={700}>Final Pay Amount</Typography>
                <AnimatedNumber
                  component="number"
                  value={Number(personalSalary) - 200}
                  style={styles.animatedNumber}
                  frameStyle={perc => (perc > 20 && perc < 80 ? { opacity: 0.5 } : {})}
                  duration={300}
                  formatValue={num => Number(num).toFixed(2)}
                />
              </Stack>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={6} md={7}>
          <Box display={"flex"} flexDirection={"row"} sx={styles.chartContainer} p={3}>
            <Stack alignItems={"center"}>
              <Doughnut data={chartData} />
            </Stack>
            <Stack>
              {salaryDetail.map((tax, index) => {
                return (
                  <Typography fontWeight={700} key={index}>
                    - {tax.name}
                  </Typography>
                );
              })}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Salary;
