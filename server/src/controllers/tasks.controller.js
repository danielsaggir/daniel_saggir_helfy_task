const tasks = require("../data/tasks.data");

function getAllTasks(req, res) {
  res.json(tasks);
}

function createTask(req, res) {
  const { title, description, completed, priority } = req.body;
  const newTask = { id: tasks.length + 1, title, description, completed, priority, createdAt: new Date() };
  tasks.push(newTask);
  res.status(201).json(newTask);
}

module.exports = {
  getAllTasks,
  createTask,
};