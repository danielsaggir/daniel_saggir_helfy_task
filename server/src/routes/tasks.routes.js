const express = require("express");
const { getAllTasks, createTask, updateTask} = require("../controllers/tasks.controller");
const validate = require("../middleware/validate");
const { createTaskSchema, updateTaskSchema } = require("../schemas/task.schema");
const router = express.Router();    

router.get("/", getAllTasks);
router.post("/", validate(createTaskSchema), createTask);
router.put("/:id", validate(updateTaskSchema), updateTask);

module.exports = router;