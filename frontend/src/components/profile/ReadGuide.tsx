import { Box, Typography, Link } from "@mui/material";
import { FC } from "react";

const styles = {
  title: {
    borderBottom: 1,
    paddingBottom: 2,
    borderColor: "#f0f2f5",
  },
  newLine: {
    display: "block",
  },
  container: {
    marginBottom: 32,
    display: "grid",
    gap: 10,
  },
};

const ReadGuide: FC = () => {
  return (
    <Box style={styles.container}>
      <Typography sx={styles.title} variant="h4">
        To-Read
      </Typography>
      <Typography variant="body1">
        First of all, please get acquainted with Pinecone’s Pinecone’s structure <Link>(organizational chart)</Link>{" "}
        click below:
        <Link
          color="inherit"
          href="https://www.notion.so/Pinecone-Organizational-structure-79a351a2ca9a42558905b78baf9b54d8"
          sx={styles.newLine}
        >
          Pinecone Organizational structure
        </Link>
        To get acquainted with Pinecone’s
        <Link>Roles and Responsibilities of Each Departments</Link> below:
        <Link
          color="inherit"
          sx={styles.newLine}
          href="https://www.notion.so/Roles-and-Responsibilities-of-Each-Departments-9c40d6d255df4d38a2a7b30ebf0b4750"
        >
          Roles and Responsibilities of Each Departments
        </Link>
        To get acquainted with Pinecone’s
        <Link>employee policy</Link> below:
        <Link
          color="inherit"
          sx={styles.newLine}
          href="https://www.notion.so/Policies-Procedures-1d6ed69f9232471bbec9623d3eebef73"
        >
          Policies & Procedures
        </Link>
        To get acquainted with Pinecone’s 💚
        <Link>How we love our Employee</Link>, click below:
        <Link
          color="inherit"
          sx={styles.newLine}
          href="https://www.notion.so/How-we-love-our-Employee-b817c78d3aaa4c4984678886425d79bc"
        >
          How we love our Employee
        </Link>
        Meet everyone and add a section for yourself click below:
        <Link color="inherit" sx={styles.newLine} href="https://www.notion.so/69fd61d6d9a847419ce31d3a9c1f2d8c">
          Nestizens Directory
        </Link>
      </Typography>
    </Box>
  );
};

export default ReadGuide;
