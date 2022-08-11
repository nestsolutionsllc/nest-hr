import mongoose from "mongoose";

const { Schema } = mongoose;

const achievementItemSchema = new Schema({
  title: String,
  rating: Number,
  companyName: String,
  date: {
    type: String,
  },
  description: String,
});

const achievementSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    // require: true,
  },
  category: {
    type: String,
    require: true,
  },
  data: [achievementItemSchema],
});

const Achievement = mongoose.model("achievement", achievementSchema);

export default Achievement;
