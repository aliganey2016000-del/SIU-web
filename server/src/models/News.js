import mongoose from "mongoose";
const newsSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  excerpt: { type: String, default: "" },
  image: { type: String, default: "" },
  publishedAt: { type: Date, default: Date.now },
  published: { type: Boolean, default: true }
}, { timestamps: true });
export default mongoose.model("News", newsSchema);
