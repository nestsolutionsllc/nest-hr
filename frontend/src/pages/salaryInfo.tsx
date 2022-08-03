import type { NextPage } from "next";
import { Button } from "@mui/material";
import { useState } from "react";
import MainLayout from "../layouts/MainLayout";

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />;

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
            {/* <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Salary</TableCell>
            <TableCell align="right">Bonus</TableCell>
            <TableCell align="right">Allowance</TableCell>
            <TableCell align="right">Insurance</TableCell>
            <TableCell align="right">Tax</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.amount}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.amount}
              </TableCell>
              <TableCell align="right">{row.bonus}</TableCell>
              <TableCell align="right">{row.allowance}</TableCell>
              <TableCell align="right">{row.insurance}</TableCell>
              <TableCell align="right">{row.tax}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> */}
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
                  {/* <td style={{border:"solid black 1px", textAlign:"center"}}>{list.salary}</td>
          <td style={{border:"solid black 1px", textAlign:"center"}}>{list.bonus}</td>
          <td style={{border:"solid black 1px", textAlign:"center"}}>{list.allowance}</td>
          <td style={{border:"solid black 1px", textAlign:"center"}}>{list.insurance}</td>
          <td style={{border:"solid black 1px", textAlign:"center"}}>{list.tax}</td>
          <td style={{border:"solid black 1px", textAlign:"center"}}>{list.total}</td> */}
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
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SalaryPage;
