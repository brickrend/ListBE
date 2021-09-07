const express = require("express");

// ** db
const db = require("./db/models/index");

const app = express();

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
