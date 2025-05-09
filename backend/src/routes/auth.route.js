import { Router } from "express";
import { User } from "../model/user.model.js";
const router = Router();

router.post("/callback", async (req, res) => {
  try {
    const { id, firstName, lastName, imageUrl } = req.body;
    // check if user already exist
    const user = await User.findOne({ clerkId: id });
    if (!user) {
      // signup
      await User.create({
        clearkId: id,
        fullName: `${firstName} ${lastName}`,
        imageUrl,
      });
    }
    res
      .status(200)
      .json({ success: true, message: "User created successfully" });
  } catch (error) {
    console.log(error);
    console.log("error in auth callback", error);

    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

export default router;
