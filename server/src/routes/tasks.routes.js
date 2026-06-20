const express = require("express");
const { getAllTasks, createTask, updateTask, deleteTask, toggleTask} = require("../controllers/tasks.controller");
const validate = require("../middleware/validate");
const { createTaskSchema, updateTaskSchema, deleteTaskSchema } = require("../schemas/task.schema");
const router = express.Router();    

router.get("/", getAllTasks);
router.post("/", validate(createTaskSchema), createTask);
router.put("/:id", validate(updateTaskSchema), updateTask);
router.delete("/:id", deleteTask);
router.patch("/:id/toggle", toggleTask);

module.exports = router;