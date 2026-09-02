import { Router } from "express";
import News from "../models/News.js";
const router = Router();
router.get("/", async (_req, res) => {
  try { res.json(await News.find({ published: true }).sort({ publishedAt: -1 }).limit(6)); }
  catch { res.status(500).json({ message: "Failed to load news" }); }
});
router.post("/", async (req, res) => {
  try { res.status(201).json(await News.create(req.body)); }
  catch (error) { res.status(400).json({ message: error.message }); }
});
export default router;
