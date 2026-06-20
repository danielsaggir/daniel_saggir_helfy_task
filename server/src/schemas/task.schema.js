const { z } = require("zod");

const taskPrioritySchema = z.enum(["low", "medium", "high"]);

const taskSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().min(1),
  description: z.string(),
  completed: z.boolean(),
  createdAt: z.coerce.date(),
  priority: taskPrioritySchema,
});

const createTaskSchema = z.object({
  title: z.string().min(1),
  description: z.string().default(""),
  completed: z.boolean().optional().default(false),
  priority: taskPrioritySchema.optional().default("medium"),
});

const updateTaskSchema = z.object({
  title: z.string().min(1),
  description: z.string(),
  completed: z.boolean(),
  priority: taskPrioritySchema,
});

const idParamSchema = z.object({
  id: z.coerce.number().int().positive(),
});

module.exports = {
  idParamSchema,
  taskSchema,
  createTaskSchema,
  updateTaskSchema,
};