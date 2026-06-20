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

module.exports = taskSchema;