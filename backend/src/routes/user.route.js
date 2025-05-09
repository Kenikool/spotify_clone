import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => {
  res.send("User");
});

router.get("/login", (req, res) => {
  res.send("User");
});

router.get("/logout", (req, res) => {
  res.send("User");
});

export default router;
