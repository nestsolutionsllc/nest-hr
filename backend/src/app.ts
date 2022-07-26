import express from "express";
import cors from "cors";
import movieRouter from "./routes/routes";

const app = express();

//CORS Policy configuration
app.use(cors());

//Use Express
app.use(express.json());

//router
app.use(movieRouter);

app.get("/", (req, res) => {
  res.send("SERVICE RUNNING");
});

export { app };
