const express = require("express");
const { createTask, fatchTasks } = require("./controllers");

const router = express.Router();
router.get("/lists", fatchTasks);
router.post("/addTask", createTask);

module.exports = router;
