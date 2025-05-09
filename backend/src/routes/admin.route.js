import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Admin");
});

router.get("/dashboard", (req, res) => {
  res.send("Admin");
});

export default router;
