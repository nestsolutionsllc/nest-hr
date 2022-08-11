import mongoose from "mongoose";

const { Schema } = mongoose;

const OnboardCheckList = new Schema({
  role: { type: String, required: true },
  checklists: [
    {
      type: { type: String, required: true },
      questions: [{ question: { type: String, required: true }, checked: { type: Boolean, default: true } }],
    },
  ],
});

const Onboard = mongoose.model("Onboarding", OnboardCheckList);

export default Onboard;
