// ** models **
const { Task } = require("../../db/models");

exports.fatchTasks = async (req, res) => {
  const task = await Task.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
  });
  res.json(task);
};

exports.createTask = async (req, res) => {
  try {
    req.body.date = new Date().toDateString();
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    console.log(error);
  }
};
