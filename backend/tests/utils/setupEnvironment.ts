import mongoose from "mongoose";
import Movie from "../../src/models/Movie";
import Onboard from "../../src/models/profile/onboarding/Onboard";
import Achievement from "../../src/models/Achievement";
import Ticket from "../../src/models/ticket";

const setupEnvironment = async () => {
  /* istanbul ignore next */
  if (!process.env.MONGODB_URL) {
    process.env.MONGODB_URL = "mongodb://localhost:27017/test_nest_hr";
  }
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URL, {});
    await Movie.deleteMany();
    await Ticket.deleteMany();
    await Achievement.deleteMany();
    await Onboard.deleteMany();
  }
};

const tearDown = async () => {
  await Movie.deleteMany();
  await Ticket.deleteMany();
  await mongoose.connection.close();
};

export { setupEnvironment, tearDown };
