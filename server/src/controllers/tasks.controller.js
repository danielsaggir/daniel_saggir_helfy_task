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

function updateTask(req, res) {
    const id = Number(req.params.id);
    const task = tasks.find((t) => t.id === id);
  
    if (!task)
        return res.status(404).json({ message: "Task not found" });
  
    const { title, description, completed, priority } = req.body;
    Object.assign(task, {title, description, completed, priority });
  
    res.json(task);
  }

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
};