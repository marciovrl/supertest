let Joi = require("@hapi/joi");

let schema = Joi.object({
  name: Joi.string(),
  value: Joi.number(),
  quantity: Joi.number()
});

module.exports = { schema };
