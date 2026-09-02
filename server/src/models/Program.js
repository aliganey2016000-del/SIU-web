import mongoose from "mongoose";
const programSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  faculty: { type: String, required: true, trim: true },
  level: { type: String, enum: ["Diploma", "Bachelor", "Master"], default: "Bachelor" },
  duration: { type: String, required: true },
  description: { type: String, default: "" },
  active: { type: Boolean, default: true }
}, { timestamps: true });
export default mongoose.model("Program", programSchema);
