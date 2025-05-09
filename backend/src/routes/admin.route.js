import { Router } from "express";
const router = Router();

router.post("/", (req, res) => {
  res.send("Admin");
});
router.delete("/", (req, res) => {
  res.send("Admin");
});

export default router;
