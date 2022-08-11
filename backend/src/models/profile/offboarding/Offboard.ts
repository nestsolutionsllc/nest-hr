import mongoose from "mongoose";

const { Schema } = mongoose;

const OffboardingSchema = new Schema({
  role: { type: String, required: true },
  checklists: [
    {
      type: { type: String, required: true },
      questions: [{ question: { type: String, required: true }, checked: { type: Boolean, default: true } }],
    },
  ],
});

const Offboard = mongoose.model("Offboarding", OffboardingSchema);

export default Offboard;
