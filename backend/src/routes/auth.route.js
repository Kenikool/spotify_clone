import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Auth");
});

router.get("/login", (req, res) => {
  res.send("Auth");
});

router.get("/logout", (req, res) => {
  res.send("Auth");
});

export default router;
