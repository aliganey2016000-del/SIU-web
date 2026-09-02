import { Router } from "express";
import Program from "../models/Program.js";
const router = Router();
router.get("/", async (_req, res) => {
  try { res.json(await Program.find({ active: true }).sort({ createdAt: -1 })); }
  catch { res.status(500).json({ message: "Failed to load programs" }); }
});
router.post("/", async (req, res) => {
  try { res.status(201).json(await Program.create(req.body)); }
  catch (error) { res.status(400).json({ message: error.message }); }
});
export default router;
