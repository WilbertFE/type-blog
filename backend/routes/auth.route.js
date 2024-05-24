import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  const isLogin = req.user ? true : false;
  if (!isLogin) {
    return res.sendStatus(401);
  }
  res.sendStatus(200);
});

export const authRoute = router;
