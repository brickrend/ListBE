const express = require("express");
const passport = require("passport");

// ** constrollers **
const { register, login } = require("./controllers");

const router = express.Router();

router.post("/register", register);
router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  login
);

module.exports = router;
