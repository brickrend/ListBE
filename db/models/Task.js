module.exports = (seqeulize, DataTypes) => {
  const Task = seqeulize.define("Task", {
    taskname: { type: DataTypes.STRING },
    date: { type: DataTypes.STRING },
  });
  return Task;
};
