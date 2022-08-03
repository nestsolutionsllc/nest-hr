import type { NextPage } from "next";
import { Button } from "@mui/material";
import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />;

function createData(name: number, calories: string) {
  return {
    name,
    calories,
    history: [
      {
        date: 40000,
        customerId: "+10000",
        amount: "-15000",
      },
      {
        date: 37000,
        customerId: "+15000",
        amount: "-10000",
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Salary Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Amount</TableCell>
                    <TableCell>Bonus/Allowance</TableCell>
                    <TableCell align="right">Tax/Insurance</TableCell>
                    <TableCell align="right">Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map(historyRow => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">47000</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [createData(50000, "November 15"), createData(43000, "January 18")];

function CollapsibleTable() {
  return (
    <TableContainer>
      <Table aria-label="collapsible table" style={{ width: "41vw" }}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="left">Amount received</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const SalaryPage: NextPage = () => {
  const [type, setType] = useState("text");

  const hider = () => {
    if (type === "text") {
      setType("password");
    } else {
      setType("text");
    }
  };

  const list = {
    id: 1,
    salary: "500,000",
    bonus: "+50,000",
    allowance: "+50,000",
    insurance: "-5,000",
    tax: "-70,000",
    total: "525,000",
  };

  return (
    <MainLayout>
      <div className="container" style={{ fontFamily: "Roboto", fontWeight: 500 }}>
        <div className="salary-container" style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "row", borderRadius: 50 }}>
            <img
              src="http://waytohunt.org/wp-content/uploads/2015/11/Mr-bean-as-an-avatar-whatsapp-dp.jpg"
              style={{ borderRadius: "100%", width: 150, height: 150 }}
            />
            <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
              <text style={{ fontSize: 50 }}>Placeholder</text>
              <text style={{ fontSize: 20 }}>example@gmail.com</text>
            </div>
          </div>
          <div
            className="salary-info"
            style={{ fontFamily: "Roboto", fontWeight: 500, display: "flex", justifyContent: "space-between" }}
          >
            <input
              style={{
                border: "none",
                fontFamily: "Roboto",
                fontWeight: 500,
                fontSize: 50,
                marginTop: 50,
                width: "12vw",
                backgroundColor: "F5F5F5",
              }}
              type={type}
              disabled={true}
              value={"60000000$"}
            />
            <Button style={{ marginTop: 50 }} onClick={hider}>
              Hide it
            </Button>
          </div>
          <div className="salary-table" style={{ marginTop: 15 }}>
            <div className="salary-breakdown">
              <table cellPadding={2} style={{ border: "solid black 1px", borderCollapse: "collapse", width: "41vw" }}>
                <tr>
                  <th style={{ border: "solid black 1px" }}>Salary</th>
                  <th style={{ border: "solid black 1px" }}>Bonus</th>
                  <th style={{ border: "solid black 1px" }}>Allowance</th>
                  <th style={{ border: "solid black 1px" }}>Insurance</th>
                  <th style={{ border: "solid black 1px" }}>Taxes</th>
                  <th style={{ border: "solid black 1px" }}>Total</th>
                </tr>
                <tr>
                  <td style={{ border: "solid black 1px", textAlign: "center" }}>
                    <input
                      style={{ border: "none", fontFamily: "Roboto", fontWeight: 500, textAlign: "center" }}
                      type={type}
                      disabled={true}
                      value={list.salary}
                    />
                  </td>
                  <td style={{ border: "solid black 1px", textAlign: "center" }}>
                    <input
                      style={{ border: "none", fontFamily: "Roboto", fontWeight: 500, textAlign: "center" }}
                      type={type}
                      disabled={true}
                      value={list.bonus}
                    />
                  </td>
                  <td style={{ border: "solid black 1px", textAlign: "center" }}>
                    <input
                      style={{ border: "none", fontFamily: "Roboto", fontWeight: 500, textAlign: "center" }}
                      type={type}
                      disabled={true}
                      value={list.allowance}
                    />
                  </td>
                  <td style={{ border: "solid black 1px", textAlign: "center" }}>
                    <input
                      style={{ border: "none", fontFamily: "Roboto", fontWeight: 500, textAlign: "center" }}
                      type={type}
                      disabled={true}
                      value={list.insurance}
                    />
                  </td>
                  <td style={{ border: "solid black 1px", textAlign: "center" }}>
                    <input
                      style={{ border: "none", fontFamily: "Roboto", fontWeight: 500, textAlign: "center" }}
                      type={type}
                      disabled={true}
                      value={list.tax}
                    />
                  </td>
                  <td style={{ border: "solid black 1px", textAlign: "center" }}>
                    <input
                      style={{ border: "none", fontFamily: "Roboto", fontWeight: 500, textAlign: "center" }}
                      type={type}
                      disabled={true}
                      value={list.total}
                    />
                  </td>
                </tr>
              </table>
              <div className="payroll" style={{ fontFamily: "Roboto", marginTop: 15 }}>
                <CollapsibleTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SalaryPage;
