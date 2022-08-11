import express from "express";
import cors from "cors";
import movieRouter from "./routes/movieRouter";
import ticketRouter from "./routes/ticketRouter";
import onboardRouter from "./routes/profile/onboarding/onboardRouter";
import offboardRouter from "./routes/profile/offboarding/offboardRouter";
import achievementRouter from "./routes/achievementRouter";

const app = express();

// CORS Policy configuration
app.use(cors());

// Use Express
app.use(express.json());

// Routers
app.use(movieRouter);
app.use(ticketRouter);
app.use(onboardRouter);
app.use(offboardRouter);
app.use(achievementRouter);

app.get("/", (req, res) => {
  res.send("SERVICE RUNNING");
});

export default app;
