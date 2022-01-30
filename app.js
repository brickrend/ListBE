const express = require("express");

// ** passport **
const passport = require("passport");

// ** db **
const db = require("./db/models/index");
// ** routers **
const userRouter = require("./API/user/routes");
const listRouter = require("./API/list/router");
// ** strategies **
const { localStrategy } = require("./middleware/passport");
// ** middelwares **
const cors = require("cors");

const app = express();

// ** middleware **
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
passport.use(localStrategy);

// ** routers **
app.use(userRouter);
app.use(listRouter);

const run = async () => {
  await db.sequelize.sync({ alter: true });
  app.listen(8000, () => {
    console.log("connection approved");
  });
  try {
  } catch (error) {
    console.error(error);
  }
};

run();
