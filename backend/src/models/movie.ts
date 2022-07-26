import mongoose from "mongoose";

const { Schema } = mongoose;

const movieSchema = new Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  stars: { type: Array, default: [], required: true },
  year: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});
const Movie = mongoose.model("movies", movieSchema);
export default Movie;
