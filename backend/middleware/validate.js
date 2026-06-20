function validate(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        message: "Validation failed",
        errors: result.error.flatten(),
      });
    }
    req.body = result.data;
    next();
  };
}

function validateParams(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.params);
    if (!result.success) {
      return res.status(400).json({
        message: "Invalid id",
        errors: result.error.flatten(),
      });
    }
    req.params = result.data;
    next();
  };
}

module.exports = { validate, validateParams };