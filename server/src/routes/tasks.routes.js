const express = require("express");
const { getAllTasks, createTask, updateTask, deleteTask, toggleTask} = require("../controllers/tasks.controller");
const { validateParams, validate } = require("../middleware/validate");
const { createTaskSchema, updateTaskSchema, idParamSchema } = require("../schemas/task.schema");
const router = express.Router();    

router.get("/", getAllTasks);
router.post("/", validate(createTaskSchema), createTask);
router.put("/:id", validateParams(idParamSchema), validate(updateTaskSchema), updateTask);
router.delete("/:id", validateParams(idParamSchema), deleteTask);
router.patch("/:id/toggle", validateParams(idParamSchema), toggleTask);

module.exports = router;