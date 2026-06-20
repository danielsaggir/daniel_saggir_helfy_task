const tasks = require("../data/tasks.data");

function getAllTasks(req, res) {
  res.json(tasks);
}

function createTask(req, res) {
    const { title, description, completed, priority } = req.body;
    const newId = Math.max(0, ...tasks.map((t) => t.id)) + 1;
    const newTask = { id: newId, title, description, completed, priority, createdAt: new Date() };    
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

function deleteTask(req, res) {
  const id = Number(req.params.id);
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) return res.status(404).json({ message: "Task not found" });
  tasks.splice(index, 1);
  res.status(204).send();
}

function toggleTask(req, res) {
    const id = Number(req.params.id);
    const task = tasks.find((t) => t.id === id);
  
    if (!task)
      return res.status(404).json({ message: "Task not found" });
  
    task.completed = !task.completed;
    res.json(task);
}

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  toggleTask,
};