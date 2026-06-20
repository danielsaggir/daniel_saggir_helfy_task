const express = require("express");
const tasks = require("../data/tasks.data");
const { getAllTasks, createTask } = require("../controllers/tasks.controller");
const validate = require("../middleware/validate");
 const { createTaskSchema } = require("../schemas/task.schema");
const router = express.Router();

router.get("/", getAllTasks);
router.post("/", validate(createTaskSchema), createTask);

module.exports = router;